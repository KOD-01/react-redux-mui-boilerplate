  
import * as t from './actionTypes';


export function changeLocale(languageLocale) {
  localStorage.setItem('languageLocale',languageLocale)
  return {
    type: t.CHANGE_LOCALE,
    locale: languageLocale,
  };
}