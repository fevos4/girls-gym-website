import React, { useState } from 'react';
import { FaDumbbell, FaRunning, FaComments } from 'react-icons/fa';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import { useSwipeable } from 'react-swipeable';

const Services = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const programs = [
    {
      title: t('bodyBuilding.title'),
      description: t('bodyBuilding.description', { returnObjects: true }),
      icon: <FaDumbbell className="text-5xl text-orange-500" />
    },
    {
      title: t('fitnessTraining.title'),
      description: t('fitnessTraining.description', { returnObjects: true }),
      icon: <FaRunning className="text-5xl text-orange-500" />
    },
    {
      title: t('consultation.title'),
      description: t('consultation.description', { returnObjects: true }),
      icon: <FaComments className="text-5xl text-orange-500" />
    }
  ];

  const handleNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % programs.length);
  const handlePrev = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + programs.length) % programs.length);

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <section className="py-12 bg-gray-50" id="services">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold font-montserrat text-black">{t('programsHeader')}</h2>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-6xl">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 flex flex-col items-center shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="mb-4 text-center">{program.icon}</div>
            <h3 className="text-xl font-bold font-montserrat text-black mb-2 text-center">{program.title}</h3>
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

      {/* Mobile Carousel */}
      <div {...handlers} className="md:hidden relative mx-auto max-w-full overflow-hidden px-4">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {programs.map((program, index) => (
            <div key={index} className="min-w-full p-4 transition-transform duration-500">
              <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow-lg transform transition-transform duration-300">
                <div className="mb-4 text-center">{program.icon}</div>
                <h3 className="text-xl font-bold font-montserrat text-black mb-2 text-center">{program.title}</h3>
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
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full focus:outline-none"
        >
          <IoIosArrowDropleft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full focus:outline-none"
        >
          <IoIosArrowDropright className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Services;
