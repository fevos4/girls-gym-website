import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-gray-50" id="about">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center md:gap-36">
        {/* Image Section */}
        <div className="md:w-1/2 w-full hidden md:block">
          <img
            src="/assets/about.jpg"
            alt={t('aboutHeader')}
            className="w-full object-cover rounded-tl-3xl rounded-br-3xl"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 w-full mt-8 md:mt-0 text-center md:text-left">
          {/* Heading */}
          <h3 className="text-lg text-gray-700 font-semibold mb-2 font-montserrat">
            {t('aboutHeader')} 
          </h3>
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-4 leading-tight font-montserrat">
            {t('aboutSubHeader')}
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-xs mb-6 leading-relaxed font-montserrat">
            {t('aboutDescription')}
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {['feature1', 'feature2', 'feature3', 'feature4'].map((key) => (
              <div className="flex items-center" key={key}>
                <span className="bg-[#FDC505] text-white rounded-full p-2 mr-3">
                  ✔
                </span>
                <p className="text-gray-700 font-medium font-montserrat">{t(`aboutFeatures.${key}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
