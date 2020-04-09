import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { translationMessages } from './i18n';
import history from './lib/history';
import reducers from './reducers';
import LanguageProvider from './modules/LanguageProvider';
import ThemeProvider from './modules/ThemeProvider'
// import { connectToWebSocket } from 'lib/webSocket';

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      name: 'App', actionsBlacklist: ['REDUX_STORAGE_SAVE']
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunkMiddleware, routerMiddleware(history))
);

const store = createStore(
  reducers,
  enhancer
);

const MOUNT_NODE = document.getElementById('root');

const render = messages => {
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider>
        <LanguageProvider messages={messages}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </LanguageProvider>
      </ThemeProvider>
    </Provider>,
    MOUNT_NODE,
  );
};

if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() =>
      Promise.all([
        import('intl/locale-data/jsonp/tr.js'),
        import('intl/locale-data/jsonp/en.js'),
      ]),
    )
    .then(() => render(translationMessages))
    .catch(err => {
      throw err;
    });
} else {
  render(translationMessages);
}

// if (window.WebSocket) {
//   connectToWebSocket(store);
// } else {
//   console.log('WebSocket is not supported by your browser.');
// }


