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
function positionRandom(){
  let arrayRandom: [number, number, number] = [
    Math.random() * (1.5 - (-1.5)) + (-1.5), 
    0, 
    Math.random() * (1.5 - (-1.5)) + (-1.5) 
  ]
  return arrayRandom;
}

function BoxContainer({ layout }: { layout: string }) {

  const flexPositions: [number, number, number][] = [
  //  x, z,  y
    [-1.2, 0, -1],
    [0, 0, -1],
    [1.2, 0, -1],
    [-1.2, 0, 0.3]
  ];

  const gridPositions: [number, number, number][] = [
    [-0.8, 0, -1.0],
    [0.8, 0, -1.0],
    [-0.8, 0, 0.7],
    [0.8, 0, 0.7]
  ];
  
  const desorganizadoPositions: [number, number, number][] = [
    positionRandom(),
    positionRandom(),
    positionRandom(),
    positionRandom()
  ];


  const positions = layout === 'grid' ? gridPositions 
                  : layout==='flex'? flexPositions : desorganizadoPositions;

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
        <label className='button'>
          <input type="radio" name="layout" value="default" checked={layout === 'default'} onChange={() => setLayout('default')} />
          Desorganizado
        </label>
        <label className='button'>
          <input type="radio" name="layout" value="flex" checked={layout === 'flex'} onChange={() => setLayout('flex')} />
          Flexbox
        </label>
        <label className='button'>
          <input type="radio" name="layout" value="grid" checked={layout === 'grid'} onChange={() => setLayout('grid')} />
          Grid
        </label>
      </div>
      <div className="canvas-container">
        <Scene layout={layout} />
      </div>
      <h3>
          Aprenda a organizar suas caixas! Veja o código e o repositório acessando o link abaixo e lendo o ReadMe
      </h3>
      <a href="https://github.com/JoshiProjects/ProjetoFlexGrid#">Projeto Flex Grid</a>
    </div>
  );
}

export default App;



