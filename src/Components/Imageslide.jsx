import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const ImageSlider = () => {
  const slides = [
    { url: '/assets/edi2.jpg' },
    { url: '/assets/edi1.jpg' },
    { url: '/assets/edi3.jpg' },
    { url: '/assets/edi4.jpg' },
    { url: '/assets/edi6.jpg' },
    { url: '/assets/edi5.jpg' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1200px] h-[600px] w-full m-auto py-8 px-4 relative group'>
      {/* Slide Container with Overlay */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden group">
        {/* Darkened Image */}
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full bg-center bg-cover duration-500 group-hover:brightness-75"
        ></div>

        {/* Hover Text */}
        <div className="absolute bottom-[-100px] left-0 w-full bg-black/50 text-white text-center py-4 transition-transform duration-500 group-hover:bottom-0">
          <h3 className="text-xl font-semibold">Beautiful Image</h3>
          <p className="text-sm">This is your description text</p>
        </div>
      </div>

      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      {/* Dots */}
      <div className='flex top-4 justify-center py-2'>
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
