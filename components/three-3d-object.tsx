'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import {
  useGLTF,
  PresentationControls,
  OrbitControls
} from '@react-three/drei';

type ModelProps = {
  [key: string]: any;
};

function Model(props: ModelProps) {
  const { scene } = useGLTF('/camero.glb');

  // Enable shadows for the model
  scene.traverse((object: any) => {
    if (object.isMesh) {
      object.castShadow = true; // Enable shadow casting
      object.receiveShadow = true; // Enable receiving shadows
    }
  });

  return <primitive object={scene} {...props} />;
}

export default function Home() {
  return (
    <>
      Hello
      <Canvas
        // shadows
        style={{ position: 'absolute', width: '100%', height: '100vh' }}
        camera={{ position: [3, 3, 5], fov: 50 }}
      >
        {/* Ambient Light */}
        <ambientLight intensity={0.5} />

        {/* Directional Light with smoother Shadows */}
        <directionalLight
          // castShadow
          position={[10, 10, 5]}
          intensity={1.5}
          shadow-mapSize={[4096, 4096]} // Increase shadow resolution for smoother edges
          shadow-bias={-0.0005} // Use a small bias to fix artifacts
          shadow-camera-near={1}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        {/* Add a plane to receive the shadow */}
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1, 0]}
          receiveShadow
        >
          <planeGeometry args={[10, 10]} />
          <shadowMaterial opacity={0.3} />
        </mesh>

        {/* PresentationControls and Model */}
        <PresentationControls global>
          <Model scale={0.5} />
        </PresentationControls>

        {/* Optional OrbitControls */}
        <OrbitControls />
      </Canvas>
    </>
  );
}
