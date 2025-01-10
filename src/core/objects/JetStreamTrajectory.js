import * as THREE from 'three';
import * as d3 from 'd3';
import { Line2 } from '../../../node_modules/three/examples/jsm/lines/Line2.js';
import { LineMaterial } from '../../../node_modules/three/examples/jsm/lines/LineMaterial.js';
import { LineGeometry } from '../../../node_modules/three/examples/jsm/lines/LineGeometry.js';

export function createJetStreamTrajectory(year, radius = 1.01, opacity = 0.8, color = 0xffffff) {
    const geometry = new LineGeometry();
    
    const material = new LineMaterial({
        color: color,
        linewidth: 5,
        transparent: true,
        opacity: opacity,
        resolution: new THREE.Vector2(window.innerWidth, window.innerHeight)
    });

    const jetStreamMesh = new Line2(geometry, material);

    // Update path to match your file structure
    d3.csv(`_python/_output/_traj/jetstream_traj_${year}-01-01T00:00:00.000000000.csv`)
        .then(data => {
            const positions = [];
            data.forEach(d => {
                const lon = parseFloat(d.longitude);
                const lat = parseFloat(d.latitude);
                const phi = (90 - lat) * Math.PI / 180;
                const theta = (lon + 180) * Math.PI / 180;

                positions.push(
                    -radius * Math.sin(phi) * Math.cos(theta),
                    radius * Math.cos(phi),
                    -radius * Math.sin(phi) * Math.sin(theta)
                );
            });

            geometry.setPositions(positions);
        });

    // Handle window resize
    window.addEventListener('resize', () => {
        material.resolution.set(window.innerWidth, window.innerHeight);
    });

    jetStreamMesh.visible = false;
    return jetStreamMesh;
} 