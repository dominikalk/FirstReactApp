import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = {};

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-3">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink
              activeStyle={activeStyle}
              exact
              className="nav-link"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeStyle={activeStyle}
              className="nav-link"
              to="/courses"
            >
              Courses
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeStyle={activeStyle} className="nav-link" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
