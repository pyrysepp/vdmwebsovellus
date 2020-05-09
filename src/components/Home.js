import React from 'react';
import './Home.css'
import nuolialas from './images/chevron-down-solid.svg'

//Kotinäkymä eli tää on se mikä tulee ku avaa sivun, löytyy oleellisin tieto kampanjasta?

export const Home = () => {
    return(
        <>
        <div className="main-container">
        <div className="header-container">
           <header>
            <h1>Hiilineutraalia voimaa ytimestä</h1> 
           </header>

        </div>
        <div className="content">
            <div className="esittely">
                <h2>Kampanjan esittely</h2>
                <p> Kampanjamme “Hiilineutraalia voimaa ytimestä” kampanjoi ydinvoiman puolesta, ja organisaatio, jossa toimimme, on Teollisuuden voima. Kampanjamme yksi ydinviesteistä on ydinvoiman hyödyt ilmastonmuutoksen ehkäisyssä. Ydinvoiman hyödyntäminen on välttämätöntä ottaen huomioon nykyisen tilanteen ilmastonmuutoksen suhteen: fossiilisista energiamuodoista täytyy luopua, jotta ilmastonmuutos voitaisiin pysäyttää. Ydinvoima voisi toimia hyvänä väliaikaisena ja nopeana korvikkeena fossiilisille energiamuodoille, sillä sen päästöt ovat todella pienet. Kampanjamme tavoite on ydinvoimaan maineen ja suosion parantaminen. Kampanjamme tavoitteena on laittaa loppu epämääräisille olettamuksille ydinvoimasta korvaamalla ne faktoilla ja tutkimustiedolla.
                </p>

                <h2>Katso kampanjavideo alta!</h2>
                <img className="nuolialas" src={nuolialas} alt="nuoli"></img>
            </div>
            </div>
            </div>
            <div className="video-section-container">
                <div className="video-container">
                    <h2>Kampanjavideo</h2>
                    <div className="video-wrapper">
                        <iframe title="kampanjavideo" className="responsive-iframe" src="https://www.youtube-nocookie.com/embed/Bb9O99NUBwU" ></iframe>
                    </div>
                </div>
            </div>
        
        
        </>
    )
}