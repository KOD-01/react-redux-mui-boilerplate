import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import languageProviderReducer from './modules/LanguageProvider/reducer';
import themeProviderReducer from './modules/ThemeProvider/reducer';
import history from './lib/history';

export default combineReducers({
  router: connectRouter(history),
  form: formReducer,
  language: languageProviderReducer,
  theme: themeProviderReducer
});
