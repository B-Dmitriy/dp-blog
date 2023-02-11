import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
    // Язык по умолчанию. Если указать массив ['en', 'ru'] прилетят чанки сразу для 2 языков
    // false - не подгружать язык по умолчанию, только активный
        fallbackLng: false,
        debug: IS_DEV,

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
