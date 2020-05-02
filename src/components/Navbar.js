import React from 'react'
import {NavLink} from "react-router-dom"
import './Navbar.css'

//navigointi  sivun yläosaan.



const Navbar = () => {
    return(
    <nav className="navbar">
        <ul>
            <li><NavLink to="/" className="navlink" >Koti</NavLink></li>
            <li><NavLink to="/contact" className="navlink" activeClassName="navlink-active">contact</NavLink></li> 
            <li><NavLink to="/Taustaa" className="navlink" activeClassName="navlink-active">Taustaa</NavLink></li>  
        </ul>
    </nav> 
    )
}
export default Navbar