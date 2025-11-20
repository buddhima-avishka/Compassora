import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Compass(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/fantasy_compass.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="A_Fantasy_Compass_Scenefbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Cube013"
                  position={[-28.824, 10.258, -18.271]}
                  rotation={[-0.886, -0.387, 0.291]}
                  scale={100}>
                  <mesh
                    name="Cube013_Crystal_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube013_Crystal_0.geometry}
                    material={materials.Crystal}
                  />
                </group>
                <group
                  name="Cylinder128"
                  position={[0.737, 1.864, 0.96]}
                  rotation={[-0.886, -0.387, 0.291]}
                  scale={100}>
                  <mesh
                    name="Cylinder128__0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder128__0.geometry}
                    material={materials['Cylinder.128__0']}
                  />
                </group>
                <group
                  name="Torus012"
                  position={[-30.248, 8.685, -16.928]}
                  rotation={[-0.886, -0.387, 0.291]}
                  scale={100}>
                  <mesh
                    name="Torus012__0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus012__0.geometry}
                    material={materials['Cylinder.128__0']}
                  />
                </group>
                <group
                  name="Torus013"
                  position={[-26.128, 14.082, -20.879]}
                  rotation={[-0.886, -0.387, 0.291]}
                  scale={100}>
                  <mesh
                    name="Torus013__0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus013__0.geometry}
                    material={materials['Cylinder.128__0']}
                  />
                </group>
                <group
                  name="BezierCircle006"
                  position={[-22.61, 47.747, -70.9]}
                  rotation={[-0.886, -0.387, 0.291]}
                  scale={100}>
                  <mesh
                    name="BezierCircle006__0"
                    castShadow
                    receiveShadow
                    geometry={nodes.BezierCircle006__0.geometry}
                    material={materials['Cylinder.128__0']}
                  />
                </group>
                <group
                  name="BezierCurve012"
                  position={[0.888, 1.576, 0.724]}
                  rotation={[-0.886, -0.387, 0.291]}
                  scale={100}>
                  <mesh
                    name="BezierCurve012__0"
                    castShadow
                    receiveShadow
                    geometry={nodes.BezierCurve012__0.geometry}
                    material={materials['Cylinder.128__0']}
                  />
                </group>
                <group
                  name="BezierCurve013"
                  position={[0.888, 1.576, 0.724]}
                  rotation={[-0.886, -0.387, 0.051]}
                  scale={100}>
                  <mesh
                    name="BezierCurve013__0"
                    castShadow
                    receiveShadow
                    geometry={nodes.BezierCurve013__0.geometry}
                    material={materials['Cylinder.128__0']}
                  />
                </group>
                <group
                  name="Cube012"
                  position={[31.003, 22.822, 4.552]}
                  rotation={[-0.886, -0.387, 0.291]}
                  scale={100}>
                  <mesh
                    name="Cube012__0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube012__0.geometry}
                    material={materials['Cylinder.128__0']}
                  />
                </group>
                <group
                  name="Compass001"
                  position={[0.888, 1.576, 0.724]}
                  rotation={[-0.886, -0.387, 0.291]}
                  scale={100}>
                  <mesh
                    name="Compass001__0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Compass001__0.geometry}
                    material={materials['Cylinder.128__0']}
                  />
                  <group name="Cylinder130">
                    <mesh
                      name="Cylinder130__0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder130__0.geometry}
                      material={materials['Cylinder.128__0']}
                    />
                  </group>
                  <group name="Cylinder129" rotation={[0, 0, 0.895]}>
                    <mesh
                      name="Cylinder129__0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder129__0.geometry}
                      material={materials['Cylinder.128__0']}
                    />
                  </group>
                  <group name="Cylinder119">
                    <mesh
                      name="Cylinder119__0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder119__0.geometry}
                      material={materials['Cylinder.128__0']}
                    />
                  </group>
                  <group name="Cylinder120">
                    <mesh
                      name="Cylinder120__0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder120__0.geometry}
                      material={materials['Cylinder.128__0']}
                    />
                  </group>
                  <group name="Cylinder131" position={[0.359, 0, 0.061]}>
                    <mesh
                      name="Cylinder131__0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder131__0.geometry}
                      material={materials['Cylinder.128__0']}
                    />
                  </group>
                </group>
                <group
                  name="Cylinder114"
                  position={[-19.574, 41.782, -61.647]}
                  rotation={[-0.886, -0.387, 1.862]}
                  scale={100}>
                  <mesh
                    name="Cylinder114__0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder114__0.geometry}
                    material={materials['Cylinder.128__0']}
                  />
                </group>
                <group
                  name="Cylinder115"
                  position={[-17.729, 38.157, -56.023]}
                  rotation={[-0.886, -0.387, 0.291]}
                  scale={100}>
                  <mesh
                    name="Cylinder115__0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder115__0.geometry}
                    material={materials['Cylinder.128__0']}
                  />
                </group>
                <group
                  name="Cylinder116"
                  position={[-19.538, 41.712, -61.538]}
                  rotation={[-0.886, -0.387, 0.291]}
                  scale={100}>
                  <mesh
                    name="Cylinder116__0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder116__0.geometry}
                    material={materials['Cylinder.128__0']}
                  />
                </group>
                <group
                  name="Cylinder117"
                  position={[-18.243, 39.165, -57.588]}
                  rotation={[-0.886, -0.387, 0.291]}
                  scale={100}>
                  <mesh
                    name="Cylinder117__0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder117__0.geometry}
                    material={materials['Cylinder.128__0']}
                  />
                </group>
                <group
                  name="Cylinder118"
                  position={[-16.839, 36.408, -53.311]}
                  rotation={[-0.886, -0.387, 0.291]}
                  scale={100}>
                  <mesh
                    name="Cylinder118__0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder118__0.geometry}
                    material={materials['Cylinder.128__0']}
                  />
                </group>
                <group
                  name="Cylinder121"
                  position={[0.888, 1.576, 0.724]}
                  rotation={[-0.886, -0.387, -2.85]}
                  scale={100}>
                  <mesh
                    name="Cylinder121__0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder121__0.geometry}
                    material={materials['Cylinder.128__0']}
                  />
                </group>
                <group
                  name="Cylinder122"
                  position={[0.888, 1.576, 0.724]}
                  rotation={[-0.886, -0.387, 0.291]}
                  scale={100}>
                  <mesh
                    name="Cylinder122__0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder122__0.geometry}
                    material={materials['Cylinder.128__0']}
                  />
                </group>
                <group
                  name="Cylinder123"
                  position={[0.888, 1.576, 0.724]}
                  rotation={[-0.886, -0.387, 0.291]}
                  scale={100}>
                  <mesh
                    name="Cylinder123__0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder123__0.geometry}
                    material={materials['Cylinder.128__0']}
                  />
                </group>
                <group
                  name="Cylinder124"
                  position={[0.888, 1.576, 0.724]}
                  rotation={[-0.886, -0.387, 0.291]}
                  scale={100}>
                  <mesh
                    name="Cylinder124__0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder124__0.geometry}
                    material={materials['Cylinder.128__0']}
                  />
                </group>
                <group
                  name="Cylinder125"
                  position={[1.008, 1.348, 0.538]}
                  rotation={[-0.886, -0.387, 0.291]}
                  scale={100}>
                  <mesh
                    name="Cylinder125__0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder125__0.geometry}
                    material={materials['Cylinder.128__0']}
                  />
                </group>
                <group
                  name="Cylinder126"
                  position={[0.888, 1.576, 0.724]}
                  rotation={[-0.886, -0.387, 0.291]}
                  scale={100}>
                  <mesh
                    name="Cylinder126__0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder126__0.geometry}
                    material={materials['Cylinder.128__0']}
                  />
                </group>
                <group
                  name="Cylinder127"
                  position={[-41.686, 22.513, -52.308]}
                  rotation={[-0.886, -0.387, 0.291]}
                  scale={100}>
                  <mesh
                    name="Cylinder127_Material_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder127_Material_0.geometry}
                    material={materials.Material}
                  />
                </group>
                <group
                  name="Circle006"
                  position={[-3.453, 9.826, 7.467]}
                  rotation={[-0.886, -0.387, 0.291]}
                  scale={100}>
                  <mesh
                    name="Circle006_Glass_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle006_Glass_0.geometry}
                    material={materials.Glass}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/fantasy_compass.glb')