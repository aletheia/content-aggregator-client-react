import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import common_en from './translations/en/common.json';

i18n.use(LanguageDetector).init({
  lng: 'en',
  resources: {
    en: {
      translations: common_en,
    },
  },
  fallbackLng: 'en',
  debug: true,

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ',',
  },

  react: {
    wait: true,
  },
});

export default i18n;
