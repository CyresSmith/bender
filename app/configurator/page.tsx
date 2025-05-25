"use client";

import { ConfiguratorProvider } from "@/components/configurator";
import Experience from "@/components/experience";
import { Canvas } from "@react-three/fiber";

import Selection from "@/components/selection";

const Page = () => {
  return (
    <ConfiguratorProvider>
      <div className="@container relative flex flex-col items-center h-screen justify-center p-5 @3xl:p-10 bg-gray-300">
        <Selection />
        <Canvas
          gl={{ antialias: false, preserveDrawingBuffer: true }}
          shadows
          camera={{ position: [-4, 3, 6], fov: 35 }}
        >
          <ambientLight intensity={0.2} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <Experience />
        </Canvas>
      </div>
    </ConfiguratorProvider>
  );
};

export default Page;
