"use client";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Hero = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="relative h-screen">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#1a1a1a",
            },
          },
          fpsLimit: 60,
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
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold">Welcome to Our Store</h1>
        <p className="mt-4 text-xl md:text-2xl">Find the best products at the best prices.</p>
        <a href="#" className="mt-8 bg-blue-600 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-full transition-all duration-300">
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Hero;