import {NavLink} from 'react-router-dom';
import React from 'react';

const Header = () => (
  <header>
    <h1>Portfolio</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/portfolio" activeClassName="is-active" exact={true}>Portfolio</NavLink>
    <NavLink to="/contact" activeClassName="is-active" exact={true}>Contact</NavLink>

  </header>
);

export default Header;