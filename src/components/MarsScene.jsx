import { useTexture } from '@react-three/drei';
import { DoubleSide } from 'three';

const MarsScene = () => {
  const marsTexture = useTexture('/mars_texture.jpg');

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[1000, 1000]} />
        <meshStandardMaterial map={marsTexture} side={DoubleSide} />
      </mesh>
    </group>
  );
};

export default MarsScene;
