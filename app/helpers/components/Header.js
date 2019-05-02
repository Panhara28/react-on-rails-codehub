import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => (
  <header>
    <h1>Blogs</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/blogs" activeClassName="is-active">Blogs</NavLink>
  </header>
);

export default Header;
