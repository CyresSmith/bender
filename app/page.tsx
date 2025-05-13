"use client";

import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Model() {
  const { scene } = useGLTF("/models/bender.glb");
  return <primitive object={scene} />;
}

export default function Home() {
  const onClick = () => alert("Вже несемо!");

  return (
    <div className=" @container fle flex col justify-center p-5 @3xl:p-10">
      <div className="grid-cols-1 grid @3xl:grid-cols-2 @3xl:p-10 gap-10 p-5  rounded-[calc(theme(space.5)+theme(radius-3xl))] @3xl:rounded-[calc(theme(space.10)+theme(radius-3xl))] bg-gray-500 max-w-5xl">
        <div className="max-w-full aspect-square bg-background rounded-3xl">
          <Canvas camera={{ position: [-3, 3, 4], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={0.9} />
            <Model />
            <OrbitControls enableZoom />
          </Canvas>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2 @xl:flex-row justify-between mb-5">
            <p className="text-amber-300 font-bold text-5xl">49 200 ₴</p>

            <button
              className="rounded-full cursor-pointer hover:bg-amber-500 transition-colors duration-300 bg-amber-300 p-3 text-black"
              type="button"
              onClick={onClick}
            >
              Купити
            </button>
          </div>

          <p>
            <b>Опис:</b> Гранітний пам’ятник з чорного та сірого граніту.
            Квітник може бути як відкритий, так і закритий. Термін виготовлення
            4-8 тижні. Також надаються послуги з доставки та встановлення
            пам’ятника.
          </p>
          <div>
            <p>Розміри:</p>
            <ul>
              <li>довжина 196 см;</li>
              <li>ширина 97 см;</li>
              <li> висота 155 см.</li>
            </ul>
          </div>
          <p>
            Отримати додаткову інформацію та замовити пам’ятник ви також можете
            зателефонувавши до нашої майстерні: контакти.
          </p>

          <p>Ціна вказана без художніх робіт та аксесуарів.</p>
        </div>
      </div>
    </div>
  );
}
