import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [show, setShow] = useState(false);

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? '500' : 'normal',
      textDecoration: isActive ? 'underline' : 'none',
    }
  }
  return (
    <>
      <nav className="navbar-expand-lg p-3">
        <div className="container">
          {/* <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}
          {/* <div
              className={`collapse navbar-collapse ${show ? "show" : ""}`}
            ></div> */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink  style={navLinkStyles} exact activeClassName="navbar__link--active" className="nav-link" to="/Explore">
                EXPLORE
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={navLinkStyles} activeClassName="navbar__link--active" className="nav-link" to="/Events">
                EVENTS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={navLinkStyles} activeClassName="navbar__link--active" className="nav-link" to="/Ideas">
                IDEAS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={navLinkStyles} activeClassName="navbar__link--active" className="nav-link" to="/ContactUs">
                CONTACT US
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={navLinkStyles} activeClassName="navbar__link--active" className="nav-link" to="/AboutUs">
                ABOUT US
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
