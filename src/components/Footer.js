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
    href="#"
    className="facebook a-socials"
    >
    <FontAwesomeIcon icon={faFacebook} size="2x" />
    </a>
    <a href="https://twitter.com/voimaaytimesta" 
    className="twitter a-socials">
    <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a>
    <a
    href="https://www.instagram.com/voimaaytimesta/"
    className="instagram a-socials"
    >
    <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>
    <a
    href="https://www.youtube.com/watch?v=Bb9O99NUBwU&feature=youtu.be"
    className="youtube a-socials"
    >
    <FontAwesomeIcon icon={faYoutube} size="2x" />
    </a>
    </div>
    )
}
const Footer = () => {
    return(
        
        <footer>
            <div className="contact">
            <h2 className="padding">Ota yhteyttä</h2>
            <Socials />
            <p className="padding">
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
