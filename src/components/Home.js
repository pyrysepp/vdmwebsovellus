import React from 'react';
import './Home.css'
import nuolialas from './images/chevron-down-solid.svg'

//Kotinäkymä eli sovelluksen landing page, jolle käyttäjä saapuu avatessaan sovelluksen ensimmäisen kerran. 
//Sisältää kampanjatiivistelmän ja -videon. 

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
                <h2>Hiilineutraalin energiantuotannon puolesta</h2>
                <h2>#voimaaytimestä</h2>
                <p> Kampanjamme “Hiilineutraalia voimaa ytimestä” kampanjoi ydinvoiman ja hiilineutraalin energiantuotannon puolesta. Ydinvoimalla on ratkaiseva rooli ilmastonmuutoksen torjunnassa ja ilmastotavoitteiden saavuttamisessa, kuten hallituksen tavoitteessa hiilineutraalista Suomesta vuonna 2035. Ydinvoiman hyödyntäminen on välttämätöntä ottaen huomioon nykyisen tilanteen ilmastonmuutoksen suhteen: fossiilisista energiamuodoista täytyy luopua, jotta ilmastonmuutos voitaisiin pysäyttää. Ydinvoima voisi toimia hyvänä väliaikaisena ja nopeana korvikkeena fossiilisille polttoaineille, sillä sen kasvihuonekaasupäästöt ovat todella pienet. Laitamme lopun epämääräisille olettamuksille ydinvoimasta korvaamalla ne faktoilla ja tutkimustiedolla. Lue lisää ydinvoiman turvallisuudesta ja ympäristöystävällisyydestä sivuiltamme, ja osallistu keskusteluun käyttämällä hashtagia #voimaaytimestä! </p>
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