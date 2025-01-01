"use client";
import { Circle, Html, OrbitControls, Stats, useGLTF, useProgress } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import React, { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{Math.round(progress)}% loaded</Html>;
}

const Model(props) {
  const scene = useGLTF("/Models/phone.glb");
  return <primitive object={scene.scene} {...props} />;
}

const Scene: React.FC = () => {
  return (
    <Canvas camera={{ position: [-0.5, 1, 2] }} shadows>
      <Suspense fallback={<Loader />}>
        <directionalLight position={[0, 5, 5]} />
        <Model url="/Models/phone.glb" />
        <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
          <meshStandardMaterial />
        </Circle>
        <OrbitControls target={[0, 1, 0]} />
        <axesHelper args={[5]} />
        <Stats />
      </Suspense>
    </Canvas>
  );
};

export default Scene;