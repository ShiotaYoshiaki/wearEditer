import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import { register } from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './modules/createStore';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

register();