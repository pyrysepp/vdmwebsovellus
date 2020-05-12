import React, {useEffect} from 'react'
import './SwitchContainer.css'
import {Switch, Route, withRouter 
} from "react-router-dom"


import Turvallisuus from './Turvallisuus'
import Ympäristö from './Ympäristö'
import {Home} from "./Home.js"
import CommentSection from './commentsection/CommentSection.js'
import {About} from "./About.js"
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Faq from './Faq'

import Navbar from "./Navbar"
import Footer from "./Footer"

// Komponentti hoitaa sivujen välisen siirtymisen käyttämällä react routeria.
/* 
Komponentissa on myös siirtymisen yhteydessä tapahtuva efekti, joka on toteutettu react-transition groupilla
sekä CSSTransitionilla. 
*/

const SwitchContainer = ({location}) => {

//Hookki joka skrollaa ikkunan ylös location.keyn muuttuessa eli kun navigointielementtiä (esim. koti) painetaan.

    useEffect(() => { 
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, [location.key])
      

    return(
       
        <TransitionGroup className="transition-group">
        <CSSTransition key={location.key} 
        timeout={300}
        classNames={'fade'}
        >
            <section className="route-section">

                <Navbar />
                <div className="page-container">
                <Switch location={location}>
                    <Route path="/meistä">
                        <About />
                    </Route>
                    <Route path="/turvallisuus">
                        <Turvallisuus />
                    </Route>
                    <Route path="/ympäristövaikutukset">
                        <Ympäristö />
                    </Route>
                    <Route path="/faq">
                        <Faq />
                        <CommentSection />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                </div>
                <Footer />
                
            </section>
            
        </CSSTransition>
        </TransitionGroup>
        
      
    )
}

export default withRouter(SwitchContainer)