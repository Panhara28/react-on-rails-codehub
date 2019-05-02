import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
  <nav className="uk-navbar-container uk-margin" uk-navbar>
    <div className="uk-navbar-left">
      <a className="uk-navbar-item uk-logo" href="#">React On Rails</a>
        <ul className="uk-navbar-nav">
          <li>
            <NavLink to="/" activeClassName="is-active" exact={true}>
              <span className="uk-icon uk-margin-small-right" uk-icon="icon: star" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" activeClassName="is-active">
              <span className="uk-icon uk-margin-small-right" uk-icon="icon: star" />
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="is-active">
              <span className="uk-icon uk-margin-small-right" uk-icon="icon: star" />
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="is-active">
              <span className="uk-icon uk-margin-small-right" uk-icon="icon: star" />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
