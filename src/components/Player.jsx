import { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

const Player = () => {
  const { camera } = useThree();
  const playerRef = useRef();
  const velocityRef = useRef(new Vector3());

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.code) {
        case 'KeyW':
          velocityRef.current.z = -1;
          break;
        case 'KeyS':
          velocityRef.current.z = 1;
          break;
        case 'KeyA':
          velocityRef.current.x = -1;
          break;
        case 'KeyD':
          velocityRef.current.x = 1;
          break;
      }
    };

    const handleKeyUp = (e) => {
      switch (e.code) {
        case 'KeyW':
        case 'KeyS':
          velocityRef.current.z = 0;
          break;
        case 'KeyA':
        case 'KeyD':
          velocityRef.current.x = 0;
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useFrame(() => {
    if (playerRef.current) {
      playerRef.current.position.add(velocityRef.current);
      camera.position.copy(playerRef.current.position);
    }
  });

  return <mesh ref={playerRef} />;
};

export default Player;
