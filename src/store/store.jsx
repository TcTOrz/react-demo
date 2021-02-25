/*
 * @Author: Li Jian
 * @Date: 2021-02-24 14:22:16
 * @LastEditTime: 2021-02-25 10:47:56
 * @LastEditors: Li Jian
 */
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../store/CounterSlice.jsx';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
