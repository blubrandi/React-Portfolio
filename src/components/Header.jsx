import React from "react"
import { Route, Link } from "react-router-dom"

export default function Header() {
    return (
       <div className="header">
           <h1><Link to="/">Brandi The iOS Dev</Link></h1>
           <div className="header-links">
            <ul>
                <li><Link to="/about">About</Link> </li>
                <li><Link to="/ios">iOS</Link> </li>
                <li><Link to="/web">Web</Link> </li>
                {/* <li><Link to="/design">Design</Link> </li> */}
                <li><Link to="/contact">Contact</Link> </li>
            </ul>
           </div>

       </div>

    )
}