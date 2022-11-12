import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  {
    id: "home",
    content: "Home",
    to: "/",
  },
  {
    id: "counter",
    content: "Counter",
    to: "/counter",
  },
  {
    id: "error",
    content: "Error Boundary",
    to: "/error",
  },
];

function NavBar() {
  const activeLink = ({ isActive }) => {
    return {
      color: isActive ? "#ffffff" : undefined,
    };
  };

  const [navExpanded, setNavExpanded] = useState(false);

  return (
    <Fragment>
      <nav className="nav-container">
        <button
          className="hamburger"
          onClick={() => {
            setNavExpanded(!navExpanded);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="nav-link">
          <ul className={navExpanded ? "ul-link expanded" : "ul-link"}>
            {links.map((links) => (
              <li className="li-link">
                <NavLink
                  className="links"
                  style={activeLink}
                  to={links.to}
                  key={links.id}
                >
                  {links.content}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </Fragment>
  );
}
export default NavBar;
