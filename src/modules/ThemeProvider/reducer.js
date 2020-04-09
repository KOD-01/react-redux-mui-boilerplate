import * as t from './actionTypes';

import { red, blue } from '@material-ui/core/colors';

const DEFAULT_THEME_TYPE = localStorage.getItem('themeType') || 'light';
const DEFAULT_THEME_FONT_SIZE =
  parseInt(localStorage.getItem('themeFontSize')) || 12;

const initialState = {
  palette: {
    type: DEFAULT_THEME_TYPE,
    primary: {
      light: '#7986cb',
      main: '#3f51b5',
      dark: '#303f9f',
    },
    secondary: {
      main: '#252525',
    },
    error: {
      main: red.A400,
    },
    background: {
      main: '#FFF',

    },
  },
  typography: {
    fontSize: DEFAULT_THEME_FONT_SIZE,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case t.CHANGE_THEME_TYPE:
      return Object.assign({}, state, {
        palette: { ...state.palette, type: action.themeType },
      });
    case t.CHANGE_THEME_FONT_SIZE:
      return Object.assign({}, state, {
        typography: { ...state.typography, fontSize: action.themeFontSize },
      });
    default:
      return state;
  }
};
