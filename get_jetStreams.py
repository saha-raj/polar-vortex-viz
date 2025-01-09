import xarray as xr
import matplotlib.pyplot as plt
import cartopy.crs as ccrs
import cartopy.feature as cfeature
import numpy as np
import os
from JetStreamLoc import (create_interpolators, integrate_streamline, 
                         compute_endpoint_deviation, compute_temp_deviation,
                         smooth_endpoint_connection, find_temp_crossings)

def process_single_date(year, date, ds_u, ds_v, ds_t):
    """Process a single date and save results"""
    # Extract data for specific date and pressure levels
    u = ds_u.u.sel(valid_time=date, pressure_level=250)
    v = ds_v.v.sel(valid_time=date, pressure_level=250)
    temp = ds_t.t.sel(valid_time=date, pressure_level=600)
    temp_celsius = temp - 273.15

    # Create fast interpolators
    u_interp, v_interp = create_interpolators(u, v)

    # Find -16°C crossing point at 180° longitude
    mid_lat = find_temp_crossings(temp_celsius)
    if mid_lat is None:
        print(f"No -16°C crossing found for date {date}")
        return
    
    # Generate N evenly spaced starting points around the crossing
    N = 20
    dlat = 20  # +/- 5 degrees around crossing point
    start_lats = np.linspace(mid_lat - dlat/2, mid_lat + dlat/2, N)
    trajectories = []

    # Compute trajectories
    for lat in start_lats:
        start_point = np.array([-179.9, lat])
        traj = integrate_streamline(u_interp, v_interp, start_point)
        trajectories.append(traj)

    # Compute deviations and create sorted indices
    deviations = []
    for i, traj in enumerate(trajectories):
        initial_lat = start_lats[i]
        deviation = compute_endpoint_deviation(traj, initial_lat)
        deviations.append((i, deviation))

    sorted_indices = [i for i, _ in sorted(deviations, key=lambda x: x[1])]

    # Plot
    plt.figure(figsize=(15, 10))
    ax = plt.axes(projection=ccrs.PlateCarree())

    # Add temperature contours (filled)
    n_levels = 10  # or whatever number you want for the filled contours
    temp_min, temp_max = temp_celsius.min(), temp_celsius.max()
    levels_fill = np.linspace(temp_min, temp_max, n_levels)
    temp_contours = ax.contourf(temp.longitude, temp.latitude, temp_celsius,
                               levels=levels_fill, cmap='coolwarm',
                               transform=ccrs.PlateCarree())

    # Add specific -16°C contour line
    temp_lines = ax.contour(temp.longitude, temp.latitude, temp_celsius,
                           levels=[-16], colors='black', linewidths=1,
                           transform=ccrs.PlateCarree())
    plt.clabel(temp_lines, inline=True, fontsize=8, fmt='%1.0f°C')

    ax.add_feature(cfeature.COASTLINE)
    ax.set_global()

    # Plot all trajectories in gray
    for traj in trajectories:
        if len(traj) > 1:
            ax.plot(traj[:, 0], traj[:, 1], "-", color="#06d6a0",
                    linewidth=0.5, transform=ccrs.PlateCarree())
            ax.plot(traj[0, 0], traj[0, 1], 'go', markersize=2,
                    transform=ccrs.PlateCarree())

    # Plot top 5 qualifying trajectories
    colors = ['black', 'red', 'blue', 'green', 'orange']
    for rank, idx in enumerate(sorted_indices[:5]):
        traj = trajectories[idx]
        if len(traj) > 1:
            ax.plot(traj[:, 0], traj[:, 1], '-', color=colors[rank],
                    linewidth=1, transform=ccrs.PlateCarree())
            ax.plot(traj[0, 0], traj[0, 1], 'ko', markersize=2,
                    transform=ccrs.PlateCarree())

    # Find best temperature-following trajectory
    temp_deviations = []
    for idx in sorted_indices[:5]:
        traj = trajectories[idx]
        deviation = compute_temp_deviation(traj, temp_celsius)
        temp_deviations.append((idx, deviation))

    best_temp_idx = min(temp_deviations, key=lambda x: x[1])[0]

    # Smooth and plot final trajectory
    best_traj = smooth_endpoint_connection(trajectories[best_temp_idx])
    if len(best_traj) > 1:
        ax.plot(best_traj[:, 0], best_traj[:, 1], '-',
                color='white', linewidth=5,
                transform=ccrs.PlateCarree(), zorder=10)
        ax.plot(best_traj[0, 0], best_traj[0, 1], 'ko',
                markersize=8, transform=ccrs.PlateCarree(), zorder=11)

    plt.title(f'Wind Streamlines at 250hPa - {date}')
    plt.savefig(f'_output/streamlines_{date}.png', bbox_inches='tight', dpi=300)
    plt.close()

    # Save the final trajectory coordinates
    output_file = f'_output/jetstream_traj_{date}.csv'
    np.savetxt(output_file, best_traj,
               delimiter=',', header='longitude,latitude',
               comments='', fmt='%.6f')

# Create output directory
os.makedirs('_output', exist_ok=True)

# Process each year
for year in range(2000, 2001):
    print(f"Processing year {year}...")
    try:
        # Open datasets for the year
        ds_u = xr.open_dataset(f"_data/u_wind_{year}.nc")
        ds_v = xr.open_dataset(f"_data/v_wind_{year}.nc")
        ds_t = xr.open_dataset(f"_data/temperature_{year}.nc")
        
        # Get all dates in the dataset
        dates = ds_u.valid_time.values
        
        # Process each date
        for date in dates[:10]:
            date_str = str(date)[:10]  # Convert to YYYY-MM-DD format
            print(f"Processing date {date_str}")
            try:
                process_single_date(year, date, ds_u, ds_v, ds_t)
            except Exception as e:
                print(f"Error processing date {date_str}: {str(e)}")
                continue
                
        # Close datasets
        ds_u.close()
        ds_v.close()
        ds_t.close()
        
    except FileNotFoundError:
        print(f"Data files not found for year {year}, skipping...")
        continue
    except Exception as e:
        print(f"Error processing year {year}: {str(e)}")
        continue 
