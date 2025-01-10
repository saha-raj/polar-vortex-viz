import * as THREE from 'three';
import { PotentialPlot } from './PotentialPlot.js';
import { MODEL_PARAMS } from '../simulation/constants.js';
import { marked } from '../../../public/assets/lib/marked.esm.js';
import { createIceGroup } from './ice.js';
import { createShadowCylinder } from './shadowCylinder.js';
import { createAtmosphereNonLinear } from './atmosphereNonLinear.js';
import { createAtmosphereSingleLayer } from './atmosphereSingleLayer.js';
import { SolutionPlot } from './SolutionPlot.js';
import { StandalonePotentialPlot } from './StandalonePotentialPlot.js';
import { StandaloneTemperaturePlot } from './StandaloneTemperaturePlot.js';
import { StandaloneAnimatedSolutionPlot } from './StandaloneAnimatedSolutionPlot.js';
import { StandaloneAnimatedPotentialPlot } from './StandaloneAnimatedPotentialPlot.js';
import { StandaloneAnimatedHysteresisPlot } from './StandaloneAnimatedHysteresisPlot.js';
import { StandaloneAlbedoPlot } from './StandaloneAlbedoPlot.js';
import { createJetStreamTrajectory } from './JetStreamTrajectory.js';
import { createAnimatedJetStreamTrajectory } from './AnimatedJetStreamTrajectory.js';

export class ObjectFactory {
    static createObject(config) {
        switch (config.type) {
            case '3dObject':
                return this.create3DObject(config);
            case 'intro-header':
            case 'intro-segment':
            case 'header':
            case 'segment':
            case 'annotation':
                return this.createText(config);
            case 'button':
                return this.createButton(config);
            default:
                console.warn(`Unknown object type: ${config.type}`);
                return null;
        }
    }

    static createText(config) {
        const element = document.createElement('div');

        // First convert markdown to HTML, but preserve LaTeX delimiters
        const tempContent = config.content.replace(/\$\$(.*?)\$\$|\$(.*?)\$/g, match => {
            // Replace LaTeX with a temporary placeholder
            return `###LATEX${encodeURIComponent(match)}###`;
        });

        // Parse markdown
        let htmlContent = marked.parse(tempContent);

        // Restore LaTeX
        htmlContent = htmlContent.replace(/###LATEX(.*?)###/g, match => {
            return decodeURIComponent(match.replace('###LATEX', '').replace('###', ''));
        });

        element.innerHTML = htmlContent;

        // Process LaTeX if present
        if (htmlContent.match(/\$\$(.*?)\$\$|\$(.*?)\$/)) {
            if (window.MathJax && window.MathJax.typesetPromise) {
                MathJax.typesetPromise([element]).catch((err) => {
                    console.warn('MathJax processing failed:', err);
                });
            }
        }

        element.className = `text-element text-type-${config.type}`;
        return {
            type: 'text',
            element: element
        };
    }

    static create3DObject(config) {
        if (config.id === 'earth') {
            const geometry = new THREE.SphereGeometry(1, 64, 64);

            // Load texture
            const textureLoader = new THREE.TextureLoader();
            const earthTexture = textureLoader.load('public/assets/textures/1_earth_8k.jpg');
            const material = new THREE.MeshPhongMaterial({
                map: earthTexture,
            });
            const earthMesh = new THREE.Mesh(geometry, material);

            // Add Earth's axial tilt (23.5 degrees)
            earthMesh.rotation.z = 23.5 * Math.PI / 180;

            // create atmosphere models
            const atmosphereNonlinear = createAtmosphereNonLinear(12, 0.1, 0xcae9ff);
            // Add atmosphere models to earth mesh
            earthMesh.add(atmosphereNonlinear);

            // Create animated jet stream
            const animatedJetStream = createAnimatedJetStreamTrajectory(1.05, 0.8, 0xffffff);
            earthMesh.add(animatedJetStream);

            return {
                type: '3dObject',
                object: earthMesh,
                extras: {
                    needsLight: true,
                    atmosphereHotNonlinear: atmosphereNonlinear,
                    animatedJetStream: animatedJetStream,
                    material: material
                }
            };
        }
        return null;
    }

    static createButton(config) {
        const button = document.createElement('button');
        button.textContent = config.content;
        button.style.position = 'absolute';
        button.style.left = `${config.position.x}%`;
        button.style.top = `${config.position.y}%`;
        button.style.transform = 'translate(-50%, -50%)';
        button.style.opacity = '0';

        // Apply any additional styles from config
        if (config.style) {
            if (config.style.className) {
                button.className = config.style.className;
            }
            Object.entries(config.style).forEach(([key, value]) => {
                if (key !== 'className') {
                    button.style[key] = value;
                }
            });
        }

        return {
            type: 'button',
            element: button
        };
    }

} 