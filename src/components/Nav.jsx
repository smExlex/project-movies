import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            <h1>🏠</h1>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
