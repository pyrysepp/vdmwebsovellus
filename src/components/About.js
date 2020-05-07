import React from 'react'
import './About.css'

// Tällänen taustaa oisio, jossa kerrotaan 
// jotain taustaa tästä kampanjasta 
// ja sit esim keitä täs tiimis on ja sit yhteystiedot

const TiimiJäsen = ({nimi}) => {
    return(
        <div>
            <p>{nimi}</p>
            
        </div>
    )
}
export const About = () => {
    return(
        <>
        <div className="container">
        <div className="about-container">
            <h2>Taustaa</h2>
            <p>
            Olemme  informaatioverkostojen opiskelijoita Aalto-yliopistossa, ja olemme toteuttaneet kampanjan ydinvoiman puolesta sekä nettisivut kampanjalle Viestintä ja digitaalinen media sekä Verkkojulkaisemisen perusteet -kursseja varten.

            </p>
        </div>
        <div className="team-container">
            <h2>Tiimi</h2>
            <TiimiJäsen nimi={"Pyry Seppälä"}/>
            <TiimiJäsen nimi={"Viliina Nyyssönen"}/>
            <TiimiJäsen nimi={"Iida Lehikoinen"}/>
        </div>
        </div>
        <div className="contact-container">
            <p>
                voimaaytimesta@gmail.com
            </p>
        </div>
        </>
    )
}