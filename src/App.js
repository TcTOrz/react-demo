/*
 * @Author: Li Jian
 * @Date: 2021-02-23 09:23:16
 * @LastEditTime: 2021-02-23 16:11:40
 * @LastEditors: Li Jian
 */
import './App.less';
import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import { Layout } from "antd";
import HeaderView from './views/Header';
import SiderView from './views/Sider';
import Home from './views/Home';
import About from './views/About';
import Dashboard from './views/Dashboard';

const { Header, Content, Sider } = Layout;

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
        <br />
        404 NOT FOUND
      </h3>
    </div>
  );
}
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header className="App-header">
          <HeaderView></HeaderView>
        </Header>
        <Layout>
          <Router>
            <Sider className="App-sider">
              <SiderView></SiderView>
            </Sider>
            <Content className="App-content">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
                <Route path="*">
                  <NoMatch />
                </Route>
              </Switch>
            </Content>
          </Router>
        </Layout>
      </div>
    );
  }
}

export default App;
