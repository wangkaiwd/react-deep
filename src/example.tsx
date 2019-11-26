import * as React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import menus from './contant/menus';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          {menus.map((menu) => (
            <li key={menu.path}>
              <Link to={menu.path}>{menu.name}</Link>
            </li>
          ))}
        </ul>
        <Switch>
          {menus.map((menu) => (
            <Route path={menu.path} key={menu.path}>
              <menu.component/>
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
