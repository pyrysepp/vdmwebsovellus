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

// Tää komponentti hoitaa siirtymisten käsittelyn ja siistin fade animaation :D
// Eli tästä komponentista löytyy noi muut osio-komponentit.


const SwitchContainer = ({location}) => {

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
                        <CommentSection />
                    </Route>
                    <Route path="/turvallisuus">
                        <Turvallisuus />
                    </Route>
                    <Route path="/ympäristövaikutukset">
                        <Ympäristö />
                    </Route>
                    <Route path="/faq">
                        <Faq />
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