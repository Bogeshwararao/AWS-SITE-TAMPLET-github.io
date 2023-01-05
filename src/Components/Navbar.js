import React from "react";
import logo from "../assets/images/logo2up.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "black" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/About">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Projects">
                Team
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Blogs">
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact">
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
