/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 *   IMPORTANT: This file is used by the internal build
 *   script `extract-intl`, and must use CommonJS module syntax
 *   You CANNOT use import/export ES6 features in this file.
 */

const addLocaleData = require('react-intl').addLocaleData;
const enLocaleData = require('react-intl/locale-data/en');
const trLocaleData = require('react-intl/locale-data/tr');

const enTranslationMessages = require('./translations/en.json');
const trTranslationMessages = require('./translations/tr.json');

const config = require('../config/client');

addLocaleData(trLocaleData);
addLocaleData(enLocaleData);

const DEFAULT_LOCALE = config.defaultLocale;

// prettier-ignore
const appLocales = [
  'en',
  'tr',
];

const formatTranslationMessages = (locale, messages) => {
    const defaultFormattedMessages =
        locale !== DEFAULT_LOCALE
            ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
            : {};
    const flattenFormattedMessages = (formattedMessages, key) => {
        const formattedMessage =
            !messages[key] && locale !== DEFAULT_LOCALE
                ? defaultFormattedMessages[key]
                : messages[key];
        return Object.assign(formattedMessages, { [key]: formattedMessage });
    };
    return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

const translationMessages = {
    en: formatTranslationMessages('en', enTranslationMessages),
    tr: formatTranslationMessages('tr', trTranslationMessages),
};

exports.appLocales = appLocales;
exports.formatTranslationMessages = formatTranslationMessages;
exports.translationMessages = translationMessages;
exports.DEFAULT_LOCALE = DEFAULT_LOCALE;
