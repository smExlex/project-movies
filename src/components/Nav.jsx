import React from 'react'
import { NavLink } from "react-router-dom"

export const Nav = () => {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to="/"><h1>THE MOVIE SITE</h1></NavLink>
            </li>
        </ul>
    </nav>
  )
}
