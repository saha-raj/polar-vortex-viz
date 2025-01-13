import * as THREE from 'three';
import * as d3 from 'd3';
import { Line2 } from '../../../node_modules/three/examples/jsm/lines/Line2.js';
import { LineMaterial } from '../../../node_modules/three/examples/jsm/lines/LineMaterial.js';
import { LineGeometry } from '../../../node_modules/three/examples/jsm/lines/LineGeometry.js';

export function createJetStreamTrajectory(year, radius = 1.01, opacity = 1, color = 0xffffff) {
    const geometry = new LineGeometry();
    const material = new LineMaterial({
        color: color,
        linewidth: 8,
        transparent: true,
        opacity: opacity,
        depthWrite: false,  // Prevent z-fighting between line segments
        depthTest: true,    // Still test against other objects
        resolution: new THREE.Vector2(window.innerWidth, window.innerHeight)
    });

    const jetStreamMesh = new Line2(geometry, material);
    
    // Create group to hold both line and points
    const group = new THREE.Group();
    group.add(jetStreamMesh);
    
    // Create points for animation
    const pointGeometry = new THREE.SphereGeometry(0.02, 8, 8);
    const pointMaterial = new THREE.MeshBasicMaterial({
        color: 0x42a5f5,
        transparent: false,
        opacity: 0.05
    });
    
    const points = [];
    const NUM_POINTS = 50;  // Number of points to distribute along path

    d3.csv(`_python/_output/_traj/max_dlat_${year}_aligned.csv`)
        .then(data => {
            const positions = [];
            const cumulativeDistances = [0];  // Track actual distances along path
            let totalDistance = 0;
            
            // First point
            let lastPoint = null;
            
            data.forEach(d => {
                const lon = parseFloat(d.longitude);
                const lat = parseFloat(d.latitude);
                const phi = (90 - lat) * Math.PI / 180;
                const theta = (lon + 180) * Math.PI / 180;

                const x = -radius * Math.sin(phi) * Math.cos(theta);
                const y = radius * Math.cos(phi);
                const z = -radius * Math.sin(phi) * Math.sin(theta);
                
                positions.push(x, y, z);
                
                // Calculate cumulative distance
                if (lastPoint) {
                    const distance = Math.sqrt(
                        Math.pow(x - lastPoint.x, 2) +
                        Math.pow(y - lastPoint.y, 2) +
                        Math.pow(z - lastPoint.z, 2)
                    );
                    totalDistance += distance;
                    cumulativeDistances.push(totalDistance);
                }
                lastPoint = {x, y, z};
            });

            geometry.setPositions(positions);
            
            // Create points along the path
            for (let i = 0; i < NUM_POINTS; i++) {
                const point = new THREE.Mesh(pointGeometry, pointMaterial.clone());
                points.push(point);
                group.add(point);
            }
            
            // Store data for animation
            group.userData.positions = positions;
            group.userData.points = points;
            group.userData.totalDistance = totalDistance;
            group.userData.cumulativeDistances = cumulativeDistances;
            
            // Initialize point positions
            updatePointPositions(0);
        });

    function updatePointPositions(time) {
        const {positions, cumulativeDistances, totalDistance} = group.userData;
        if (!positions || !cumulativeDistances) return;
        
        const numPositions = positions.length / 3;
        
        points.forEach((point, i) => {
            // Calculate position along path (0 to 1)
            const pointOffset = (time + i / NUM_POINTS);
            // Only use the fractional part for actual position
            const normalizedOffset = pointOffset - Math.floor(pointOffset);
            const targetDistance = normalizedOffset * totalDistance;
            
            // Hide point if it's beyond the path length
            if (normalizedOffset >= 1.0) {
                point.visible = false;
                return;
            }
            point.visible = true;
            
            // Find position in path
            let idx = cumulativeDistances.findIndex(d => d > targetDistance);
            if (idx === -1) idx = numPositions - 1;
            if (idx === 0) idx = 1;
            
            const prevIdx = idx - 1;
            const distanceFraction = (targetDistance - cumulativeDistances[prevIdx]) / 
                                   (cumulativeDistances[idx] - cumulativeDistances[prevIdx]);
            
            const x1 = positions[prevIdx * 3];
            const y1 = positions[prevIdx * 3 + 1];
            const z1 = positions[prevIdx * 3 + 2];
            const x2 = positions[idx * 3];
            const y2 = positions[idx * 3 + 1];
            const z2 = positions[idx * 3 + 2];
            
            point.position.set(
                x1 + (x2 - x1) * distanceFraction,
                y1 + (y2 - y1) * distanceFraction,
                z1 + (z2 - z1) * distanceFraction
            );
        });
    }

    // Update animation function
    group.userData.animate = (time) => {
        const speed = -0.075; // Adjust for faster/slower animation
        updatePointPositions(time * speed);
    };

    // Handle window resize
    window.addEventListener('resize', () => {
        material.resolution.set(window.innerWidth, window.innerHeight);
    });

    group.visible = false;
    return group;
} 