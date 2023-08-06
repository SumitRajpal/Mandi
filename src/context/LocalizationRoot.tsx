import LanguageFileEnglish from "src/localization/en.json";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const languages = ["en"];
i18n.use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: "v3",
    fallbackLng: "en",
    debug: false,
    resources: {
      en: {
        translation: LanguageFileEnglish
      }
    },
    detection: {
      order: ["queryString", "cookie"],
      caches: ["cookie"]
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
