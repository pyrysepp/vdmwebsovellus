import React from 'react'
import {NavLink} from "react-router-dom"
import './Navbar.css'

//navigointi  sivun yläosaan.



const Navbar = () => {
    return(
    <nav className="navbar">
        <ul>
            <li><NavLink to="/" className="navlink" >Koti</NavLink></li> 
            <li><NavLink to="/meistä" className="navlink" activeClassName="navlink-active">meistä</NavLink></li>
            <li><NavLink to="/turvallisuus" className="navlink" activeClassName="navlink-active">turvallisuus</NavLink></li>
            <li><NavLink to="/ympäristövaikutukset" className="navlink" activeClassName="navlink-active">ympäristövaikutukset</NavLink></li>   
        </ul>
    </nav> 
    )
}
export default Navbar