import React from "react"
import { Route, NavLink } from "react-router-dom"

const activeLinkClass = {
    color: "#be13f2"
}

export default function Header() {
    return (
       <div className="header">
           <h1><NavLink to="/">Brandi The Dev</NavLink></h1>
           <div className="header-links">
            <ul>
                <li><NavLink activeStyle={activeLinkClass} to="/about">About</NavLink> </li>
                <li><NavLink activeStyle={activeLinkClass} to="/mobile">Mobile</NavLink> </li>
                <li><NavLink activeStyle={activeLinkClass} to="/web">Web</NavLink> </li>
                {/* <li><NavLink to="/design">Design</NavLink> </li> */}
                <li><NavLink activeStyle={activeLinkClass} to="/contact">Contact</NavLink> </li>
            </ul>
           </div>

       </div>

    )
}
