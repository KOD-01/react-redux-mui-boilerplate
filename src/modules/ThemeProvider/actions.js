import * as t from './actionTypes';

export const changeThemeMode = themeType => {
  localStorage.setItem('themeType', themeType);
  return {
    type: t.CHANGE_THEME_TYPE,
    themeType,
  };
};
export const changeThemeFontSize = themeFontSize => {
  localStorage.setItem('themeFontSize', themeFontSize);

  return {
    type: t.CHANGE_THEME_FONT_SIZE,
    themeFontSize,
  };
};
