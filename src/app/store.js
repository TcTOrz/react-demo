/*
 * @Author: Li Jian
 * @Date: 2021-02-24 10:14:30
 * @LastEditTime: 2021-02-24 10:14:48
 * @LastEditors: Li Jian
 */
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../store/CounterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
