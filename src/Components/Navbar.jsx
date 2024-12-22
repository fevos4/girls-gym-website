import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const { t, i18n } = useTranslation();

  const handleClick = () => setClick(!click);

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage.toLowerCase());
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setClick(false);
  };

  return (
    <div className="w-full h-[80px] bg-white/10 backdrop-blur-md fixed top-0 left-0 z-50">
      <div className="max-w-[1140px] h-full mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-4">
          <div onClick={() => scrollToSection("home")} className="cursor-pointer">
            <img src="/assets/logo.png" alt="logo" className="w-32" />
          </div>
          <select
            className="border border-gray-300 rounded-md p-1"
            onChange={handleLanguageChange}
            value={i18n.language} // Ensure the current language is reflected
          >
            <option value="am">አማርኛ</option>
            <option value="en">English</option>
            <option value="om">Oromo</option>
          </select>
        </div>

        {/* Navigation Links */}
        <ul
          className={`flex flex-col lg:flex-row justify-center items-center w-full lg:w-auto lg:static transition-all duration-300 ease-in-out ${
            click ? "fixed top-[90px] left-0 bg-white border" : "left-[100%] lg:h-auto"
          }`}
        >
          <li className={`p-4 cursor-pointer text-sm font-montserrat font-bold ${click ? "block" : "hidden lg:block"}`}>
            <a className="text-black hover:text-[#FFFFFF]" onClick={() => scrollToSection("hero")}>
              {t("navbar.home")}
            </a>
          </li>
          <li className={`p-4 cursor-pointer text-sm font-montserrat font-bold ${click ? "block" : "hidden lg:block"}`}>
            <a className="text-black hover:text-[#FFFFFF]" onClick={() => scrollToSection("services")}>
              {t("navbar.services")}
            </a>
          </li>
          <li className={`p-4 cursor-pointer text-sm font-montserrat font-bold ${click ? "block" : "hidden lg:block"}`}>
            <a className="text-black hover:text-[#FFFFFF]" onClick={() => scrollToSection("about")}>
              {t("navbar.about")}
            </a>
          </li>
          <li className={`p-4 cursor-pointer text-sm font-bold font-montserrat ${click ? "block" : "hidden lg:block"}`}>
            <a className="text-black hover:text-[#FFFFFF]" onClick={() => scrollToSection("schedule")}>
              {t("navbar.schedules")}
            </a>
          </li>
          <li className={`p-4 cursor-pointer text-sm font-bold font-montserrat ${click ? "block" : "hidden lg:block"}`}>
            <a className="text-black hover:text-[#FFFFFF]" onClick={() => scrollToSection("contact")}>
              {t("navbar.contact")}
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div onClick={handleClick} className="block lg:hidden mr-4 cursor-pointer">
          {click ? <AiOutlineClose className="text-black text-2xl" /> : <AiOutlineMenu className="text-black text-2xl" />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
