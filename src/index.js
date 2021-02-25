/*
 * @Author: Li Jian
 * @Date: 2021-02-23 09:23:16
 * @LastEditTime: 2021-02-25 13:21:39
 * @LastEditors: Li Jian
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';

import store from './store/store.jsx';
import { Provider } from 'react-redux';

// if (process.env.NODE_ENV === 'development') {
require('./mock/index');
// import './mock/index';
// }

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
