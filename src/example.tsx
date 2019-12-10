import * as React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import menus from './contant/menus';
import './assets/styles/base.scss';
import './assets/styles/reset.scss';
import './example.scss';
import { Aside, Content, Footer, Header, Layout } from './components/layout/layout';
// @ts-ignore
import avatar from './assets/images/avatar.jpeg';

const $ = (selector: string) => document.querySelector<HTMLElement>(selector);
const App = () => {
  return (
    <Router>
      <Layout className="example">
        <Header className="header">
          <img src={avatar} height={'60px'} width={'60px'} alt=""/>
        </Header>
        <Layout style={{ border: '1px solid red' }} className="content">
          <Aside style={{ border: '1px solid green' }}>
            <ul className="menu">
              {menus.map((menu) => (
                <li key={menu.path}>
                  <Link to={menu.path}>{menu.name}</Link>
                </li>
              ))}
            </ul>
          </Aside>
          <Content className="component-wrapper">
            <Switch>
              {menus.map((menu) => (
                <Route path={menu.path} key={menu.path}>
                  <menu.component/>
                </Route>
              ))}
              <Redirect to={'/icon'}/>
            </Switch>
          </Content>
        </Layout>
        <Footer className="footer">Footer</Footer>
      </Layout>
    </Router>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
