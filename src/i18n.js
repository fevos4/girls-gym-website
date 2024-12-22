import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import translationEN from "./translations/en.json";
import translationAM from "./translations/am.json";
import translationOM from "./translations/or.json";

// Define resources
const resources = {
  en: { translation: translationEN },
  am: { translation: translationAM },
  om: { translation: translationOM },
};

// Initialize i18next
i18n.use(initReactI18next).init({
  resources,
  lng: "am", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: { escapeValue: false }, // React already escapes values
});

export default i18n;
