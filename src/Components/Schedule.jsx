import React from 'react';
import { useTranslation } from 'react-i18next';

const Schedule = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-gradient-to-r from-white to-[#FDC505]" id="schedule">
      <div className="container mx-auto px-4 md:px-8">
        {/* Schedule Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-300 pb-6 mb-6">
          {/* Left: Open Hours */}
          <div className="md:w-1/3">
            <p className="text-gray-600 text-lg font-montserrat mb-2">
              {t('scheduleSubHeader')}
            </p>
            <h3 className="text-2xl font-bold text-black font-montserrat">
              {t('scheduleHeader')}
            </h3>
          </div>

          {/* Right: Time Slots */}
          <div className="md:w-2/3 grid grid-cols-2 gap-4 text-center md:text-left">
            <div>
              <h4 className="font-semibold text-lg text-black font-montserrat">
                {t('scheduleTimings.morning')}
              </h4>
              <p className="text-gray-700 font-montserrat">
                {t('scheduleTimings.morningTime')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-black font-montserrat">
                {t('scheduleTimings.afternoon')}
              </h4>
              <p className="text-gray-700 font-montserrat">
                {t('scheduleTimings.afternoonTime')}
              </p>
            </div>
          </div>
        </div>

        {/* Membership Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left: Membership Title */}
          <div className="md:w-1/3">
            <h4 className="text-2xl font-bold text-black font-montserrat">
              {t('membershipHeader')}
            </h4>
          </div>

          {/* Right: Membership Details */}
          <div className="md:w-2/3">
            <p className="text-gray-700 font-montserrat text-center md:text-left">
              {t('membershipDetails')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
