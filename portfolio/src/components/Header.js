import {NavLink} from 'react-router-dom';
import React from 'react';

const Header = () => (
  <header>
    <h1>Portfolio</h1>
    <NavLink exact={true} to="/" activeClassName="is-active">Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </header>
);

export default Header;