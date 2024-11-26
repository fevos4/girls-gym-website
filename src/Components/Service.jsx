import React, { useState } from 'react';
import { FaDumbbell, FaRunning, FaComments } from 'react-icons/fa';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

const programs = [
  {
    title: 'Body Building',
    description: ['Squats', 'Deadlifts', 'Bench press'],
    icon: <FaDumbbell className="text-5xl text-orange-500" />,
  },
  {
    title: 'Fitness Training',
    description: ['Weight Loss Exercises', 'Cardio Exercises', 'Aerobics'],
    icon: <FaRunning className="text-5xl text-orange-500" />,
  },
  {
    title: 'Consulting',
    description: [
      'We provide personalized guidance to enhance your sports performance, from assessments to customized training plans',
    ],
    icon: <FaComments className="text-5xl text-orange-500" />,
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for swiping
  const handleNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % programs.length);
  const handlePrev = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + programs.length) % programs.length);

  const handleTouchStart = (e) => {
    const touchStartX = e.touches[0].clientX;
    e.target.ontouchend = (ev) => {
      const touchEndX = ev.changedTouches[0].clientX;
      if (touchStartX - touchEndX > 50) handleNext(); // Swipe left
      if (touchStartX - touchEndX < -50) handlePrev(); // Swipe right
    };
  };

  return (
    <section className="py-12 bg-gray-50" id='services'>
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold font-montserrat text-black">Programs we offer</h2>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-6xl">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 flex flex-col items-center shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Icon */}
            <div className="mb-4 text-center">{program.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-bold font-montserrat text-black mb-2 text-center">{program.title}</h3>

            {/* Description */}
            {Array.isArray(program.description) ? (
              <ul className="list-disc text-gray-600 text-sm space-y-1 pl-5 text-left">
                {program.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 text-sm font-montserrat">{program.description}</p>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Swipeable Section */}
      <div
        className="md:hidden relative mx-auto max-w-full overflow-hidden px-4"
        onTouchStart={handleTouchStart}
      >
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {programs.map((program, index) => (
            <div key={index} className="min-w-full p-4">
              <div className="bg-gray-100 rounded-xl p-6 flex flex-col items-center text-center shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                {/* Icon */}
                <div className="mb-4">{program.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-black mb-2 font-montserrat">{program.title}</h3>

                {/* Description */}
                {Array.isArray(program.description) ? (
                  <ul className="list-disc text-gray-600 text-sm space-y-1 pl-5 text-left ">
                    {program.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 text-sm font-montserrat">{program.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#FDC505] text-white p-2 rounded-full focus:outline-none"
        >
          <IoIosArrowDropleft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#FDC505] text-white p-2 rounded-full focus:outline-none"
        >
          <IoIosArrowDropright className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Services;
