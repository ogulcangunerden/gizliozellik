"use client";
import { Suspense, useRef, useEffect } from "react"; // useEffect eklenmeli
import { Canvas, useFrame } from "@react-three/fiber"; // useFrame içe aktarımını ekleyin
import { Environment, OrbitControls } from "@react-three/drei";
import { Vector3 } from "three";
import M4cs from "../../../public/images/threed/M4cs";
import styles from "./styles.css";

const M4csRotation = () => {
  const meshRef = useRef();
  const rotationSpeed = 0.01; // Dönme hızı ayarı
  const scale = 1.5; // Büyütme ölçeği

  useFrame(() => {
    // Y ekseni etrafında dönme işlemi
    meshRef.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh ref={meshRef} scale={[scale, scale, scale]}>
      <M4cs />
    </mesh>
  );
};

const Three = () => {
  const cameraRef = useRef();

  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.position.set(0, 0, 0); // Kamera konumu
      cameraRef.current.lookAt(new Vector3(0, 0, 0)); // Hedefe bak
    }
  }, []);

  return (
    <>
      <div>
        <Canvas className={styles.canvas}>
          <ambientLight intensity={3} />
          <Suspense fallback={null}>
            <M4csRotation />
          </Suspense>
          <OrbitControls
            ref={cameraRef}
            enableZoom={false}
            enablePan={false}
            autoRotate={true}
            autoRotateSpeed={0.5} // Otomatik dönme hızı
            target={[0, 1, 0]} // Hedef noktası
          />
          <Environment preset="sunset" />
        </Canvas>
      </div>
    </>
  );
};

export default Three;
