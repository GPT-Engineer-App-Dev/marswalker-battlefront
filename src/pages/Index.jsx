// Update this page (the content is just a fallback if you fail to update the page)

import { Canvas } from '@react-three/fiber';
import { Sky, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import MarsScene from '../components/MarsScene';
import Player from '../components/Player';

const Index = () => {
  return (
    <div className="w-full h-screen">
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <Sky sunPosition={[100, 10, 100]} />
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} castShadow />
          <MarsScene />
          <Player />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Index;
