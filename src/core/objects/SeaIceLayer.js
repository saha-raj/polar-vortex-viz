import * as THREE from 'three';
import * as d3 from 'd3';

export function createSeaIceLayer(year, radius = 1.01, opacity = 0.8, color = 0xffffff) {
    const group = new THREE.Group();
    
    d3.json(`data/seaice_geojson/${year}.json`)
        .then(data => {
            const gridSize = 180;
            const concentrationGrid = Array(gridSize).fill().map(() => Array(gridSize).fill(0));
            
            // Debug first few data points
            console.log(`First few points for ${year}:`, 
                data.features.slice(0,5).map(f => ({
                    coords: f.geometry.coordinates,
                    conc: f.properties.concentration
                }))
            );
            
            // Fill the grid with normalized coordinates
            data.features.forEach(feature => {
                let [lon, lat] = feature.geometry.coordinates;
                const concentration = feature.properties.concentration;
                
                // Normalize longitude to -180 to 180
                lon = lon > 180 ? lon - 360 : lon;
                
                // Convert to grid indices (flip latitude to match equirectangular)
                const latIdx = Math.floor((90 - lat) * (gridSize/180));
                const lonIdx = Math.floor((180 + lon) * (gridSize/360));
                
                if (latIdx >= 0 && latIdx < gridSize && lonIdx >= 0 && lonIdx < gridSize) {
                    concentrationGrid[latIdx][lonIdx] = concentration;
                }
            });

            const maxVertices = (gridSize - 1) * (gridSize - 1);
            const positions = new Float32Array(maxVertices * 4 * 3);
            const indices = new Uint16Array(maxVertices * 6);
            let posIndex = 0;
            let indexIndex = 0;
            let vertexIndex = 0;

            // Create quads
            for (let latIdx = 0; latIdx < gridSize-1; latIdx += 1) {
                for (let lonIdx = 0; lonIdx < gridSize-1; lonIdx += 1) {
                    const concentration = concentrationGrid[latIdx][lonIdx];
                    const lat = 90 - (latIdx * 180/gridSize);
                    
                    if (concentration > 0.3 && Math.abs(lat) > 60) {
                        // Calculate corners
                        for (let corner = 0; corner < 4; corner++) {
                            const cornerLat = latIdx + (corner & 2 ? 1 : 0);
                            const cornerLon = lonIdx + (corner & 1 ? 1 : 0);
                            
                            // Convert grid indices back to lat/lon
                            const lat = 90 - (cornerLat * 180/gridSize);
                            // Shift longitude by 180° to match texture map
                            const lon = ((cornerLon * 360/gridSize) - 180) + 180;
                            
                            // Convert to spherical coordinates
                            const phi = lat * Math.PI / 180;
                            const theta = lon * Math.PI / 180;
                            
                            // Convert to Cartesian coordinates (with corrected orientation)
                            positions[posIndex++] = -radius * Math.cos(phi) * Math.cos(theta);
                            positions[posIndex++] = radius * Math.sin(phi);
                            positions[posIndex++] = radius * Math.cos(phi) * Math.sin(theta);
                        }

                        // Reverse triangle winding order to fix face orientation
                        indices[indexIndex++] = vertexIndex;
                        indices[indexIndex++] = vertexIndex + 2;
                        indices[indexIndex++] = vertexIndex + 1;
                        indices[indexIndex++] = vertexIndex + 1;
                        indices[indexIndex++] = vertexIndex + 2;
                        indices[indexIndex++] = vertexIndex + 3;

                        vertexIndex += 4;
                    }
                }
            }

            const geometry = new THREE.BufferGeometry();
            geometry.setAttribute('position', new THREE.BufferAttribute(positions.slice(0, posIndex), 3));
            geometry.setIndex(new THREE.BufferAttribute(indices.slice(0, indexIndex), 1));
            geometry.computeVertexNormals();

            const material = new THREE.MeshBasicMaterial({
                color: color,
                transparent: true,
                opacity: opacity * 0.5,
                side: THREE.DoubleSide,
                depthWrite: false
            });

            const mesh = new THREE.Mesh(geometry, material);
            group.add(mesh);
        });

    group.visible = false;
    return group;
} 