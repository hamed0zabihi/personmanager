import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="m-3">
      <ul className="nav nav-pills justify-content-center">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" exact>
            Add Person
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">
            About me
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
