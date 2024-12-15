import React from 'react';
import { FaInstagram, FaTiktok, FaTelegramPlane, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="py-12 bg-white" id='contact'>
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Section: Logo and Description */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* Logo */}
          <div className="mb-4">
            <img
              src="/assets/logo.png"
              alt="Alpha Girls Gym Logo"
              className="w-32 mx-auto md:mx-0"
            />
          </div>

          {/* Description */}
          <p className="text-gray-700 text-lg font-montserrat">
            Ready to start your fitness journey? Come join us and experience the Alpha Girls Gym difference!
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <a
              href="https://www.instagram.com/alphagym57?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="text-black text-2xl hover:text-[#FDC505] transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@alpha.girls.gym?is_from_webapp=1&sender_device=pc"
              className="text-black text-2xl hover:text-[#FDC505] transition duration-300"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
            <a
              href="https://t.me/Ekrrrr"
              className="text-black text-2xl hover:text-[#FDC505] transition duration-300"
              aria-label="Telegram"
            >
              <FaTelegramPlane />
            </a>
          </div>
        </div>

        {/* Right Section: Contact Info */}
        <div className="md:w-1/2">
          <h3 className="text-xl font-bold text-black mb-4 font-montserrat">Contact Us</h3>
          <div className="space-y-4">
            {/* Phone */}
            <div className="flex items-center">
              <FaPhone className="text-lg text-gray-600 mr-3" />
              <p className="text-gray-700 text-lg font-montserrat">0909887766</p>
            </div>

            {/* Address */}
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-lg text-gray-600 mr-3" />
              <p className="text-gray-700 text-lg font-montserrat">Mebrat hail, Adama</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
