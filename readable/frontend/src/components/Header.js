import {NavLink} from 'react-router-dom';
import React from 'react';

const Header = () => (
  <header>
    <h1>Readable</h1>
    <NavLink exact={true} to="/" activeClassName="is-active">Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Post</NavLink>
  </header>
);

export default Header;