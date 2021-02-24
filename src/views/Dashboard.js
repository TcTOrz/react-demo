/*
 * @Author: Li Jian
 * @Date: 2021-02-23 15:09:07
 * @LastEditTime: 2021-02-24 11:09:32
 * @LastEditors: Li Jian
 */
import React from 'react';

const lists = Array(50).fill('Dashboard').map((v, i) => <div key={i}>{v}-{i}</div>);

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        {lists}
      </div>
    );
  }
}

export default Dashboard;