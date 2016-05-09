import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import App from './src/containers/app';

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('sw.js').then(function(reg) {
    if (!navigator.serviceWorker.controller) {
      return;
    }
  });
}


const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.app')
);