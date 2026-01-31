import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

export default function Cube3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // --- Setup ---
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    
    // Params derived from snippet
    const params = {
        shape: 'Cube',
        backgroundColor: '#09090b', // Matched to Krackathon 2027 theme
        lineColor: '#5c5c5c',
        dotColor: '#33ccff', // Cyan
        useFog: true,
        fogDensity: 0.02,
        useBloom: true, // Enabled bloom for better aesthetic
        bloomThreshold: 0.1,
        bloomStrength: 1.5,
        bloomRadius: 0.4,
        onlyExternal: true,
        speed: 0.1311,
        dotLength: 0.0181,
        dotDensity: 2.0
    };

    scene.background = new THREE.Color(params.backgroundColor);
    scene.fog = new THREE.FogExp2(params.backgroundColor, params.fogDensity);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, -1, 30);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ReinhardToneMapping;
    
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.enableZoom = false; // Disable zoom for background use

    // --- Post Processing ---
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), 1.5, 0.4, 0.85);
    bloomPass.threshold = params.bloomThreshold;
    bloomPass.strength = params.bloomStrength;
    bloomPass.radius = params.bloomRadius;

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // --- Logic ---
    function isPointInside(v: any, shapeType: string) {
        const x = v.x, y = v.y, z = v.z;
        const r = 12; 

        switch (shapeType) {
            case 'Cube': return Math.abs(x) < r && Math.abs(y) < r && Math.abs(z) < r;
            default: return Math.abs(x) < r && Math.abs(y) < r && Math.abs(z) < r;
        }
    }

    function isSurface(v: any, shapeType: string, step: number) {
        if (!isPointInside(v, shapeType)) return false;
        const dirs = [
            new THREE.Vector3(step,0,0), new THREE.Vector3(-step,0,0),
            new THREE.Vector3(0,step,0), new THREE.Vector3(0,-step,0),
            new THREE.Vector3(0,0,step), new THREE.Vector3(0,0,-step)
        ];
        for (let d of dirs) {
            const neighbor = v.clone().add(d);
            if (!isPointInside(neighbor, shapeType)) return true;
        }
        return false;
    }

    function createShapeGeometry(shapeType: string, onlyExternal: boolean) {
        const positions = [];
        const attributes = [];
        const step = 2; 
        const maxSegments = 6000;
        
        let currentPos = new THREE.Vector3(0, 0, 0);
        let currentDist = 0;
        
        const findStartPoint = () => {
            let p = new THREE.Vector3();
            for(let k=0; k<200; k++){
                p.set((Math.random()-0.5)*26, (Math.random()-0.5)*26, (Math.random()-0.5)*26).round().multiplyScalar(1);
                p.x = Math.round(p.x/step)*step;
                p.y = Math.round(p.y/step)*step;
                p.z = Math.round(p.z/step)*step;

                if (onlyExternal) {
                    if (isSurface(p, shapeType, step)) return p;
                } else {
                    if (isPointInside(p, shapeType)) return p;
                }
            }
            return new THREE.Vector3(0,0,0);
        };

        currentPos = findStartPoint();

        for (let i = 0; i < maxSegments; i++) {
            const dirs = [
                new THREE.Vector3(step, 0, 0), new THREE.Vector3(-step, 0, 0),
                new THREE.Vector3(0, step, 0), new THREE.Vector3(0, -step, 0),
                new THREE.Vector3(0, 0, step), new THREE.Vector3(0, 0, -step)
            ];

            const dirIndex = Math.floor(Math.random() * 6);
            const direction = dirs[dirIndex];
            const nextPos = currentPos.clone().add(direction);

            let isValid = false;
            if (onlyExternal) {
                if (isSurface(nextPos, shapeType, step)) isValid = true;
            } else {
                if (isPointInside(nextPos, shapeType)) isValid = true;
            }

            if (isValid) {
                positions.push(currentPos.x, currentPos.y, currentPos.z);
                positions.push(nextPos.x, nextPos.y, nextPos.z);
                attributes.push(currentDist);
                attributes.push(currentDist + step);
                currentDist += step;
                currentPos.copy(nextPos);
            } else {
                currentDist += 50.0;
                currentPos = findStartPoint();
            }
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('lineDistance', new THREE.Float32BufferAttribute(attributes, 1));
        return geometry;
    }

    const vertexShader = `
        attribute float lineDistance;
        varying float vDistance;
        void main() {
            vDistance = lineDistance;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `;

    const fragmentShader = `
        uniform vec3 colorLine;
        uniform vec3 colorDot;
        uniform float uTime;
        uniform float uSpeed;
        uniform float uDotLength;
        uniform float uDotRepeat;
        uniform vec3 uFogColor;
        uniform float uFogDensity;
        uniform bool uUseFog;
        varying float vDistance;
        void main() {
            float alpha = 0.2; 
            float distanceState = vDistance - uTime * uSpeed * 10.0;
            float flow = mod(distanceState, uDotRepeat * 10.0);
            float lengthVal = (uDotRepeat * 10.0) * uDotLength;
            float signal = smoothstep((uDotRepeat * 10.0) - lengthVal, (uDotRepeat * 10.0), flow);
            if(flow < (uDotRepeat * 10.0) - lengthVal) signal = 0.0;
            vec3 finalColor = mix(colorLine, colorDot, signal);
            float finalAlpha = max(alpha, signal);
            gl_FragColor = vec4(finalColor, finalAlpha);
            if (uUseFog) {
                float depth = gl_FragCoord.z / gl_FragCoord.w;
                float fogFactor = exp2(-uFogDensity * uFogDensity * depth * depth * 1.442695);
                fogFactor = clamp(fogFactor, 0.0, 1.0);
                gl_FragColor.rgb = mix(uFogColor, gl_FragColor.rgb, fogFactor);
            }
        }
    `;

    const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
            colorLine: { value: new THREE.Color(params.lineColor) },
            colorDot: { value: new THREE.Color(params.dotColor) },
            uTime: { value: 0 },
            uSpeed: { value: params.speed },
            uDotLength: { value: params.dotLength },
            uDotRepeat: { value: params.dotDensity },
            uFogColor: { value: new THREE.Color(params.backgroundColor) },
            uFogDensity: { value: params.fogDensity },
            uUseFog: { value: params.useFog }
        },
        transparent: true,
        depthTest: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide
    });

    const mesh = new THREE.LineSegments(createShapeGeometry(params.shape, params.onlyExternal), material);
    scene.add(mesh);

    const clock = new THREE.Clock();
    let animationId: number;

    function animate() {
        animationId = requestAnimationFrame(animate);
        const time = clock.getElapsedTime();
        material.uniforms.uTime.value = time;
        controls.update();
        if (params.useBloom) {
            composer.render();
        } else {
            renderer.render(scene, camera);
        }
    }
    
    animate();

    const handleResize = () => {
        if (!mountRef.current) return;
        const w = mountRef.current.clientWidth;
        const h = mountRef.current.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
        composer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationId);
        if (mountRef.current && renderer.domElement) {
           mountRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
        mesh.geometry.dispose();
        material.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
}