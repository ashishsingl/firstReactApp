import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-12 col-md-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink exact to="/" className="navbar-brand" >
                  DevPlace
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink exact activeClassName="menu_active" to="/" className="nav-link" aria-current="page">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item"><NavLink exact activeClassName="menu_active" to="/service" className="nav-link">Services</NavLink></li>
                    <li className="nav-item"><NavLink exact activeClassName="menu_active" to="/about" className="nav-link">About Us</NavLink></li>
                    <li className="nav-item"><NavLink exact activeClassName="menu_active" to="/contact" className="nav-link">Contact</NavLink></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
