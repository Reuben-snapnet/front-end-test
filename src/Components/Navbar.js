import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-500 flex justify-around py-3">
      <NavLink
        to="/event"
        className="text-lg font-semibold nav_link"
        activeClassName="is-active"
        exact={true}
      >
        Home
      </NavLink>
      <NavLink to="/about" className="text-lg font-semibold nav_link" activeClassName="is-active">
        About
      </NavLink>
    </div>
  );
};

export default Navbar;
