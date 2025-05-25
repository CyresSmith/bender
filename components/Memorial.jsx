"use client";

import { OrthographicCamera, useGLTF } from "@react-three/drei";
import { useConfigurator } from "./configurator";

export function Memorial(props) {
  const { nodes, materials } = useGLTF("./models/memorial.glb");

  const { bottom, top, vase1, vase2 } = useConfigurator();

  const vase1Position =
    vase1 === "Vase1-2"
      ? [0.425, 0.15, -0.9]
      : vase1 === "Vase1-3"
      ? [-0.425, 0.15, 0.9]
      : vase1 === "Vase1-4"
      ? [0.425, 0.15, 0.9]
      : [-0.425, 0.15, -0.9];

  const vase2Position =
    vase2 === "Vase2-2"
      ? [0.425, 0.15, -0.9]
      : vase2 === "Vase2-3"
      ? [-0.425, 0.15, 0.9]
      : vase2 === "Vase2-4"
      ? [0.425, 0.15, 0.9]
      : [-0.425, 0.15, -0.9];

  return (
    <group {...props} dispose={null}>
      <OrthographicCamera
        makeDefault={false}
        far={100}
        near={0.01}
        position={[-9.807, 6.766, 16.352]}
        rotation={[-0.339, -0.505, -0.173]}
      />

      <mesh
        geometry={nodes[top].geometry}
        material={materials["dark marble-1"]}
        position={[0, 0.15, -0.875]}
      />
      <mesh
        geometry={nodes[bottom].geometry}
        material={materials["dark marble-1"]}
      />
      {vase1 && (
        <mesh
          geometry={nodes[vase1].geometry}
          material={materials["dark marble-4"]}
          position={vase1Position}
        />
      )}
      {vase2 && (
        <mesh
          geometry={nodes[vase2].geometry}
          material={materials["dark marble-4"]}
          position={vase2Position}
        />
      )}
    </group>
  );
}

useGLTF.preload("./models/memorial.glb");
