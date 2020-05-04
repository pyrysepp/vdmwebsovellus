import React from 'react'
import './SwitchContainer.css'
import {Switch, Route, withRouter 
} from "react-router-dom"
import {Home} from "./Home.js"

import {About} from "./About.js"
import { TransitionGroup, CSSTransition } from "react-transition-group";


// Tää komponentti hoitaa siirtymisten käsittelyn ja siistin fade animaation :D
// Eli tästä komponentista löytyy noi muut osio-komponentit.


const SwitchContainer = ({location}) => {
    return(
       
        <TransitionGroup className="transition-group">
        <CSSTransition key={location.key} 
        timeout={300}
        classNames={'fade'}
        >
            <section className="route-section">
                <Switch location={location}>
                    <Route path="/meistä">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </section>
        </CSSTransition>
        </TransitionGroup>
      
    )
}

export default withRouter(SwitchContainer)