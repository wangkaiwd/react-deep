import * as React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import menus from './contant/menus';
import './assets/styles/base.scss';
import './assets/styles/reset.scss';
import './example.scss';

const App = () => {
  return (
    <Router>
      <div className="example">
        <ul className="menu">
          {menus.map((menu) => (
            <li key={menu.path}>
              <Link to={menu.path}>{menu.name}</Link>
            </li>
          ))}
        </ul>
        <div className="component-wrapper">
          <Switch>
            {menus.map((menu) => (
              <Route path={menu.path} key={menu.path}>
                <menu.component/>
              </Route>
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
