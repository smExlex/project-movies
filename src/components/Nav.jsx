import React from "react";
import { NavLink } from "react-router-dom";

 {/* This component defines a navigation bar with two links (UPCOMING MOVIES and POPULAR MOVIES) that navigate to different routes within a React application. When rendered, it will produce an HTML structure representing the navigation bar. */}
export const Nav = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <NavLink to="/">
            <h1>UPCOMING</h1>
          </NavLink>
        </li>
        <li>
          <NavLink to="/popular">
            <h1>POPULAR</h1>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
