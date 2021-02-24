/*
 * @Author: Li Jian
 * @Date: 2021-02-23 14:40:36
 * @LastEditTime: 2021-02-24 11:36:55
 * @LastEditors: Li Jian
 */
import React from 'react';
// import { useSelector } from 'react-redux';
// import {
  // selectCount,
// } from '../store/CounterSlice';
import { connect } from 'react-redux'

const lists = Array(50).fill('About').map((v, i) => <div key={i}>{v}-{i}</div>);

// 函数方法
// export default function About() {
//   return (
//     <div>
//       <div>数据来自Home组件:{useSelector(selectCount)}</div>
//       {lists}
//     </div>
//   );
// }

// 类方法
class About extends React.Component {
  render() {
    const { counter } = this.props;
    return (
      <div>
        <div>数据来自Home组件:{counter}</div>
        {lists}
      </div>
    );
  }
}

// 获取state中counter值
const getCounter = state => {
  return {
    counter: state.counter.value
  }
}

// 利用connect将组件与redux绑定起来
export default connect(getCounter)(About);