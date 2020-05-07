import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import './Footer.css'
const Socials = () => {
    return(
    <div className="social-icons">
    <a
    href=""
    className="facebook"
    >
    <FontAwesomeIcon icon={faFacebook} size="2x" />
    </a>
    <a href="" className="twitter">
    <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a>
    <a
    href=""
    className="instagram"
    >
    <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>
    </div>
    )
}
const Footer = () => {
    return(
        
        <footer>
            <div className="contact">
            <h2>Ota yhteyttä</h2>
            <Socials />
            <p>
                voimaaytimesta@gmail.com
            </p>
            </div>
            <div className="sources">
            <p>Icons powered by: Fontawesome</p>
            <p>Images powered by: pixabay.com</p>
            </div>
        </footer>
        
    )
}
export default Footer
