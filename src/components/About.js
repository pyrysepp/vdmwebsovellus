import React from 'react'
import './About.css'

// Osio, jossa kerrotaan taustaa kampanjasta. mm. Keitä me olemme ja miksi kampanja on toteutettu.

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
            Kampanjatiimi koostuu informaatioverkostojen opiskelijoista Aalto-yliopistosta ja kampanja "Hiilineutraalia voimaa ytimestä" on toteutettu kurssille Viestintä ja digitaalinen media. Lisäksi olemme tuottaneet verkkosivut kampanjalle Verkkojulkaisemisen perusteet -kurssia varten. 
            Organisaatio, jolle suunnittelimme kampanjan on Teollisuuden Voima (TVO). 
            </p>
        </div>
        <div className="team-container">
            <h2>Tiimi</h2>
                <TiimiJäsen nimi={"Pyry Seppälä"}/>
                <TiimiJäsen nimi={"Viliina Nyyssönen"}/>
                <TiimiJäsen nimi={"Iida Lehikoinen"}/>
        </div>
        </div>
        </>
    )
}