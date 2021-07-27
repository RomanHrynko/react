import React from 'react';
import Users from './Users.jsx';
import Home from './Home.jsx';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="page">
        <ul className="navigation">
          <li className="navigation__item">
            <a href="/">Home</a>
          </li>
          <li className="navigation__item">
            <a href="/users">Users</a>
          </li>
        </ul>

        <Route path="/users" component={Users} />
        <Route exact path="/" component={Home} />
      </div>
    </BrowserRouter>
  );
};

export default App;
