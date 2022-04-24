import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <NavLink exact activeClassName="Active" to="/">
        Home
      </NavLink>
      <NavLink exact activeClassName="Active" to="/chips">
        Chips
      </NavLink>
      <NavLink exact activeClassName="Active" to="/soda">
        Soda
      </NavLink>
      <NavLink exact activeClassName="Active" to="/sardines">
        Sardines
      </NavLink>
    </div>
  );
};

export default Navbar;
