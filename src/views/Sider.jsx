/*
 * @Author: Li Jian
 * @Date: 2021-02-23 11:45:49
 * @LastEditTime: 2021-02-25 11:42:22
 * @LastEditors: Li Jian
 */
import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import './Sider.less';
import { 
  Link,
  withRouter,
} from 'react-router-dom';

const { SubMenu } = Menu;

class Sider extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    let path = props.location.pathname;
    path = path.slice(1);
    if (path === '') {
      path = 'home';
    }
    console.log(path);
    this.defaultSelectedKey = [path];
  }

  handleClick(e) {
    console.log('click', e, this);
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        className="App-menu"
        defaultSelectedKeys={this.defaultSelectedKey}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" icon={<MailOutlined />} title="测试">
          <Menu.ItemGroup key="g1" title="redux/router">
            <Menu.Item key="home"><Link to="/">Home-redux</Link></Menu.Item>
            <Menu.Item key="about"><Link to="/about">About</Link></Menu.Item>
            <Menu.Item key="dashboard"><Link to="/dashboard">Dashboard</Link></Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="echarts">
            {/* <Menu.Item key="3"><Link to="/dashboard">Dashboard</Link></Menu.Item> */}
            <Menu.Item key="echarts"><Link to="/echarts">echarts</Link></Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="没用的选项1">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" icon={<SettingOutlined />} title="没用的选项2">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default withRouter(Sider);
