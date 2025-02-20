import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import './styles.css';

function Cube({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function BoxContainer({ layout }: { layout: string }) {
  const flexPositions: [number, number, number][] = [
    [-1, 0, -1],
    [1, 0, -1],
    [-1, 0, 1],
    [1, 0, 1]
  ];

  const gridPositions: [number, number, number][] = [
    [-1.5, 0, -1.5],
    [-1.5, 0, -1.5],
    [-1.5, 0, 1.5],
    [1.5, 0, 1.5]
  ];

  const positions = layout === 'grid' ? gridPositions : flexPositions;

  return (
    <>
      {/* Base da caixa */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[4, 0.1, 4]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      {/* Paredes laterais */}
      <mesh position={[-2, 0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[2, 0.1, 4]} />
        <meshStandardMaterial color="gray" transparent opacity={0.5} />
      </mesh>
      <mesh position={[2, 0.5, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <boxGeometry args={[2, 0.1, 4]} />
        <meshStandardMaterial color="gray" transparent opacity={0.5} />
      </mesh>
      <mesh position={[0, 0.5, -2]} rotation={[Math.PI / 2, 0, 0]}>
        <boxGeometry args={[4, 0.1, 2]} />
        <meshStandardMaterial color="gray" transparent opacity={0.5} />
      </mesh>
      <mesh position={[0, 0.5, 2]} rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry args={[4, 0.1, 2]} />
        <meshStandardMaterial color="gray" transparent opacity={0.5} />
      </mesh>
      {/* Cubos dentro da caixa */}
      {positions.map((pos, index) => (
        <Cube key={index} position={pos} color={["red", "blue", "green", "yellow"][index]} />
      ))}
    </>
  );
}

function Scene({ layout }: { layout: string }) {
  return (
    <Canvas camera={{ position: [0, 8, 0], fov: 70 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <BoxContainer layout={layout} />
      <OrbitControls />
    </Canvas>
  );
}

function App() {
  const [layout, setLayout] = useState('default');

  return (
    <div className="container">
      <div className="controls">
        <label>
          <input type="radio" name="layout" value="default" checked={layout === 'default'} onChange={() => setLayout('default')} />
          Desorganizado
        </label>
        <label>
          <input type="radio" name="layout" value="flex" checked={layout === 'flex'} onChange={() => setLayout('flex')} />
          Flexbox
        </label>
        <label>
          <input type="radio" name="layout" value="grid" checked={layout === 'grid'} onChange={() => setLayout('grid')} />
          Grid
        </label>
      </div>
      <div className="canvas-container">
        <Scene layout={layout} />
      </div>
    </div>
  );
}

export default App;
