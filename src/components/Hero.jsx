import React from "react";

//type animation
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          GROW WITH DATA
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for{" "}
          </p>
          <TypeAnimation
            sequence={["BTB", 2000, "B2B", 2000, "SASN", 2000]}
            speed={300}
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            wrapper="span"
            repeat={Infinity}
          />
        </div>
        <p className="md:text-2xl text-xl font-vold text-gray-500 font-bold">Monitor your data analytics to increase revenue for B2B, BTC & SASN platforms.</p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-[120%] hover:bg-[#19ffb6]  duration-300">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
