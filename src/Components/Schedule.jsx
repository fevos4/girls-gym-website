import React from 'react';

const Schedule = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-white to-[#FDC505]" id='schedule'>
      <div className="container mx-auto px-4 md:px-8">
        {/* Schedule Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-300 pb-6 mb-6">
          {/* Left: Open Hours */}
          <div className="md:w-1/3">
            <p className="text-gray-600 text-lg font-montserrat mb-2">6 days per week</p>
            <h3 className="text-2xl font-bold text-black font-montserrat">We are Open at:</h3>
          </div>

          {/* Right: Time Slots */}
          <div className="md:w-2/3 grid grid-cols-2 gap-4 text-center md:text-left">
            <div>
              <h4 className="font-semibold text-lg text-black font-montserrat">Morning</h4>
              <p className="text-gray-700 font-montserrat">12:00 - 5:00</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-black font-montserrat">Afternoon</h4>
              <p className="text-gray-700 font-montserrat">10:00 - 1:00</p>
            </div>
          </div>
        </div>

        {/* Membership Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left: Membership Title */}
          <div className="md:w-1/3">
            <h4 className="text-2xl font-bold text-black font-montserrat">Basic Membership:</h4>
          </div>

          {/* Right: Membership Details */}
          <div className="md:w-2/3">
            <p className="text-gray-700 font-montserrat text-center md:text-left">
              1500 birr/month – Access to all gym facilities and group classes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
