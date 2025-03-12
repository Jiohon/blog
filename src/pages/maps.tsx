import { useStyles } from "./styles/_map.style"

// function Model() {
//   const texture = useLoader(
//     THREE.TextureLoader,
//     'https://res.hc-cdn.com/cpage-pep-home-page/2.0.10/images/global-site-3d/%E5%9C%B0%E5%9B%BE.jpg'
//   )

//   return <meshBasicMaterial attach="material" map={texture} />
// }

export default function Maps() {
  const { styles } = useStyles()

  return (
    <>
      <div className={styles.map}>
        {/* <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
          <ambientLight intensity={0.5} />
          <directionalLight intensity={0.5} />
          <Sphere args={[1, 64, 64]}>
            <Model />
          </Sphere>
          <OrbitControls
            enableZoom={false}
            enableDamping={true}
            dampingFactor={0.05}
            autoRotate={true}
            autoRotateSpeed={0.2}
            enablePan={false}
          />
        </Canvas> */}
      </div>
    </>
  )
}
