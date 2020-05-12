import React from 'react'
import {NavLink} from "react-router-dom"
import './Navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

// Sovelluksen ylälaidassa oleva navigointielementti. Navigointi toteutettu käyttämällä react routeria.
// React router mahdollistaa sivun sisällön muuttamisen ilman uudelleenlataamista. 
// Varsinainen siirtymisten käsittely tehty SwitchContainer komponentissa.



const Navbar = () => {
    return(
    <nav className="navbar">
        <ul>
            <li><NavLink to="/" className="navlink-home"  ><FontAwesomeIcon icon={faHome}  /></NavLink></li> 
            <li><NavLink to="/turvallisuus" className="navlink" activeClassName="navlink-active">turvallisuus</NavLink></li>
            <li><NavLink to="/ympäristövaikutukset" className="navlink" activeClassName="navlink-active">ympäristövaikutukset</NavLink></li>
            <li><NavLink to="/faq" className="navlink" activeClassName="navlink-active">keskustelu</NavLink></li>
            <li><NavLink to="/meistä" className="navlink" activeClassName="navlink-active">meistä</NavLink></li>  
        </ul>
    </nav> 
    )
}
export default Navbar