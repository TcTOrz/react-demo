/*
 * @Author: Li Jian
 * @Date: 2021-02-23 15:09:07
 * @LastEditTime: 2021-02-25 13:30:46
 * @LastEditors: Li Jian
 */
import React from 'react';
import axios from 'axios';

const lists = Array(50).fill('Dashboard').map((v, i) => <div key={i}>{v}-{i}</div>);

class Dashboard extends React.Component {
  componentDidMount() {
    axios.get('/api/test').then(res => {
      console.log('res', res);
    });
  }
  render() {
    return (
      <div>
        {lists}
      </div>
    );
  }
}

export default Dashboard;