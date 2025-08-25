"use client";

import Typewriter from "typewriter-effect";
import About from "./About";

const Banner = () => {
  return (
    <div className="w-full flex  items-center min-h-screen flex-col text-center space-y-4 bg-gradient-to-b from-[#FF722B] to-white">
      <img
        src="/images/profil.png"
        alt="Photo de profil"
        className="sm:w-100 sm:h-48 md:w-180 md:h-130 rounded-full"
      />

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FF4500]">
        <span className="text-[#333]">
          Bienvenue sur mon Portfolio,
          <br />
        </span>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Scicluna Mathieu")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Développeur Next.js")
              .start();
          }}
          options={{
            loop: true,
            delay: 75,
          }}
        />
      </h1>
      <About />
    </div>
  );
};

export default Banner;
