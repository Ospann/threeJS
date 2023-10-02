import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh, RingGeometry, MeshBasicMaterial } from 'three';

const Donut = () => {
  const donutRef = useRef();

  // Поворачиваем донат внутри функции useFrame
  useFrame(() => {
    donutRef.current.rotation.x += 0.01;
    donutRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={donutRef}>
      <ringGeometry args={[1, 0.4, 64, 32]} />
      <meshBasicMaterial color="red" />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Donut />
    </Canvas>
  );
};

export default App;
