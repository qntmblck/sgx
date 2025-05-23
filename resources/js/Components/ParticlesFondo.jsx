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
          number: {
            value: 120,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: ["#b4ff55", "#00d084", "#ffea00"], // verdes y amarillo
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.7,
            anim: {
              enable: true,
              speed: 0.8,
              opacity_min: 0.3,
              sync: false,
            },
          },
          size: {
            value: { min: 2, max: 6 },
            anim: {
              enable: true,
              speed: 4,
              size_min: 1,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            outModes: "out",
            random: false,
            straight: false,
            bounce: false,
          },
          links: {
            enable: true,
            distance: 130,
            color: "#aaff77",
            opacity: 0.4,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  )
}
