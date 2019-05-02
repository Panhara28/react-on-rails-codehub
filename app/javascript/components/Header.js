import React from 'react';
import ReactDom from 'react-dom';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <header className="blog-header py-3">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-4 pt-1">
          <NavLink to="/" className="text-muted">
            Home
          </NavLink>
        </div>
        <div className="col-4 text-center">
          <NavLink to="/blogs" className="blog-header-logo text-dark">
            Blogs
          </NavLink>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-center">
          <NavLink to="/new_post" className="btn btn-sm btn-outline-secondary">
            Create New Blogs
          </NavLink>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
