/*
 * @Author: Li Jian
 * @Date: 2021-02-23 09:23:16
 * @LastEditTime: 2021-02-24 10:37:44
 * @LastEditors: Li Jian
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
