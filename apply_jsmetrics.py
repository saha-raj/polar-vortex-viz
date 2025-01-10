import xarray as xr
import jsmetrics.metrics.jet_statistics as jet_stats
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import cartopy.crs as ccrs
import cartopy.feature as cfeature

year = 2001

# Load your u and v wind component datasets
ds_u = xr.open_dataset(f"_data/u_wind_{year}.nc")
ds_v = xr.open_dataset(f"_data/v_wind_{year}.nc")

# Merge the datasets
ds_combined = xr.merge([ds_u, ds_v])

# Rename variables to match jsmetrics expectations
ds_combined = ds_combined.rename(
    {"u": "ua", "v": "va", "latitude": "lat", "longitude": "lon", "valid_time": "time"}
)

# Convert time coordinate to datetime
ds_combined["time"] = pd.to_datetime(ds_combined.time)

# Use shorter window and filter frequency
result = jet_stats.woollings_et_al_2010(
    ds_combined,
    window_size=31,
    filter_freq=5
)

# Print the shapes to understand what we're getting
print("Result shapes:")
print("jet_lat shape:", result["jet_lat"].shape)
print("jet_speed shape:", result["jet_speed"].shape)

# For each day, create a map
for day in range(3):
    date = pd.to_datetime(ds_combined.time[day].values)
    
    # Get jet position for this day (it's a single latitude)
    jet_lat = float(result["jet_lat"].isel(time=day))
    
    # Create map
    fig = plt.figure(figsize=(20, 10))
    ax = plt.axes(projection=ccrs.PlateCarree())
    ax.set_extent([-180, 180, 0, 90], crs=ccrs.PlateCarree())
    
    # Add map features
    ax.add_feature(cfeature.COASTLINE)
    ax.add_feature(cfeature.BORDERS)
    
    # Plot jet stream as a horizontal line at the computed latitude
    plt.axhline(y=jet_lat, color='r', linewidth=2)
    
    plt.title(f'Jet Stream Position - {date.strftime("%Y-%m-%d")} - Latitude: {jet_lat:.1f}°N')
    plt.savefig(f'_frames/jet_stream_map_{date.strftime("%Y%m%d")}.png')
    plt.close()
