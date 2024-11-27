import React, { useState } from "react";

const Hero = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setClick(false);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-white to-[#FDC505] pt-16 px-4 md:px-24" id="hero">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Left Section: Text */}
        <div className="flex flex-col justify-center items-center md:items-start w-full px-4 py-6 sm:py-8">
          <p className="py-2 sm:py-3 text-xs sm:text-sm md:text-xs font-light font-montserrat text-center md:text-left">
            ONLY FOR GIRLS!
          </p>
          <p className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-montserrat text-center md:text-left">
            Make Your Body Shape With <span className="text-[#FDC505]">Alpha</span>
          </p>
          <p className="py-2 sm:py-3 text-xs sm:text-sm md:text-base font-light font-montserrat text-center md:text-left">
            Welcome to Alpha Girls Gym! Our mission is to empower women through fitness in a supportive, judgment-free environment.
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start mt-4 gap-4">
            <button
              onClick={() => scrollToSection("services")}
              className="hover:bg-transparent hover:border-black border rounded-md bg-[#FDC505] px-6 sm:px-8 py-2 text-black font-bold font-montserrat"
            >
              Explore More
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:bg-[#FDC505] hover:border-[#FDC505] rounded-md border border-black px-6 sm:px-8 py-2 text-black font-bold font-montserrat"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Section: Image with Circle */}
        <div className="relative flex justify-center items-center">
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-white rounded-full blur-md"></div>
          <img
            src="/assets/hero.png"
            alt="Hero Visual"
            className="relative z-10 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
