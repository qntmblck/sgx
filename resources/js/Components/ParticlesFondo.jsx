// resources/js/Components/ParticlesFondo.jsx
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

export default function ParticlesFondo() {
  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <Particles
      id="particles-fondo"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: "#b4ff55" }, // verde lima brillante
          shape: { type: "circle" },
          opacity: { value: 0.6 },
          size: { value: { min: 1, max: 4 } },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            outModes: "out"
          },
        },
        detectRetina: true,
      }}
    />
  )
}
