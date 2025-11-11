import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";

function Services() {
  return (
    <div className=" w-full  bg-white text-black overflow-hidden">
      <h1 className="lg:text-9xl text-5xl text-center mt-60 lg:mt-52 lg:w-[70%] mx-auto motion-safe:animate-bounce">
        Our Core <span className="font-bold tracking-tight">Services</span>
      </h1>

      <div className="relative w-full h-screen mt-24">
        <img src="/twoguys.webp" alt="Two Guys" className="absolute w-full h-full object-cover object-center lg:object-right"/>
       <div className="absolute inset-0 bg-black/40 flex flex-col lg:flex-row justify-center lg:justify-end items-center text-center lg:text-left">
        <div className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[45%] h-[80%] overflow-y-auto p-6 lg:p-8 backdrop-blur-sm scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-700 leading-relaxed space-y-8 lg:space-y-10">
            <p>In a world where every second counts, we design with intention to maximise dwell time.</p>
            <p>Wiesbaden — Creative Design Studio, Germany</p>
            <p>Samet + Hassam — Co-founders of Future Three</p>
            <p>Behind The Threes — Discover the untold stories that fuel our creative process.</p>
            <p>Follow us on YouTube for insights and storytelling that inspire change.</p>
          <div className="text-center mt-10 text-white shadow-lg shadow-black p-5 rounded-xl bg-black/30">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Samet + Hassam</h1>
          <p className="text-sm sm:text-base">Co-founders of Future Three</p>
          <button className="mt-4 flex items-center justify-center gap-2 mx-auto text-sm sm:text-lg border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
            <p>Our Story</p> <CiLocationArrow1 />
          </button>
          </div>
         </div>
        </div>
      </div>
     </div>

    </div>
  );
}

export default Services;
