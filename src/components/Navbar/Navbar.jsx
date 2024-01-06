import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="start">
        <h1>ECommer</h1>
      </div>
      <div className="middle">
        <ul className="divUl">
          <NavLink className="navLi" to="/">
            Home
          </NavLink>
          <NavLink className="navLi" to="/product">
            Products
          </NavLink>
          <NavLink className="navLi" to="/about">
            About
          </NavLink>
          <NavLink className="navLi" to="/contact">
            Contact
          </NavLink>
        </ul>
      </div>
      <div className="and">
        <h1>Profile</h1>
      </div>
    </div>
  );
}

export default Navbar;
