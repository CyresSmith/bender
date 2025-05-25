import { Center, OrbitControls, Stage } from "@react-three/drei";
import { color } from "three/tsl";

import { Memorial } from "./Memorial";

const Experience = () => {
  return (
    <>
      <Stage
        intensity={1.5}
        environment={"city"}
        shadows={{
          type: "accumulative",
          color: "#d1d5dc",
          colorBlend: 2,
          opacity: 2,
        }}
        adjustCamera={2}
      >
          <Memorial color={color} />}
      </Stage>

      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
};

export default Experience;
