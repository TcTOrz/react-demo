/*
 * @Author: Li Jian
 * @Date: 2021-02-24 11:42:45
 * @LastEditTime: 2021-02-24 12:04:33
 * @LastEditors: Li Jian
 */
import React from 'react';

class Header extends React.Component {
  constructor(props) {
    // 必须从父类继承this.
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      this.tick.bind(this),
      // () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        一个基于ant design的测试页面---
        <span>当前时间: {this.state.date.toLocaleTimeString()}.</span>
      </div>
    );
  }
}

export default Header;