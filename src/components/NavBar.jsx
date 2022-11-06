import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const activeLink = ({ isActive }) => {
    return {
      color: isActive ? "#ffffff" : undefined,
    };
  };

  return (
    <Fragment>
      <div className="nav-container">
        <nav className="nav-link">
          <ul className="ul-link">
            <li className="li-link">
              <NavLink className="links" style={activeLink} to="/">
                Home
              </NavLink>
            </li>
            <li className="li-link">
              <NavLink className="links" style={activeLink} to="/counter">
                Counter
              </NavLink>
            </li>
            <li className="li-link">
              <NavLink className="links" style={activeLink} to="/error">
                Error Boundary
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
}
export default NavBar;
