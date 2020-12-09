import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { store } from '@store/index';

import { App } from './components/app';
import reportWebVitals from './reportWebVitals';

// COMMENT didt create ui-kit componnets to reduce development time
// Also there are no components around form stuff e.g. formGroup and so on
// I wanted to took ready to use ui-kit like material,
// but it was much faster to use pure html elements
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
