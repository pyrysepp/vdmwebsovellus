import React from 'react'
import './About.css'

// Tällänen taustaa oisio, jossa kerrotaan 
// jotain taustaa tästä kampanjasta 
// ja sit esim keitä täs tiimis on ja sit yhteystiedot

const TiimiJäsen = ({nimi}) => {
    return(
        <div>
            <h3>{nimi}</h3>
            
        </div>
    )
}
export const About = () => {
    return(
        <>
        <div className="about-container">
            <h2>Taustaa</h2>
            <p>
                I'm baby pug beard authentic forage vaporware hammock venmo cred selfies. Offal man braid cold-pressed, chambray fingerstache cred biodiesel enamel pin. Narwhal cloud bread farm-to-table paleo. Asymmetrical unicorn microdosing authentic, tote bag forage affogato air plant put a bird on it williamsburg crucifix brooklyn blog four dollar toast synth. Air plant forage raclette bitters, +1 green juice shaman scenester enamel pin fashion axe retro vaporware four dollar toast ethical.
                Lyft man braid ugh crucifix try-hard shaman letterpress umami flannel. Yr seitan bitters jean shorts. Portland art party distillery vaporware. Retro pug copper mug woke tattooed, plaid 8-bit listicle butcher blog activated charcoal cliche trust fund marfa. Post-ironic franzen succulents slow-carb, lo-fi fingerstache enamel pin skateboard. Tbh direct trade master cleanse salvia VHS poke banjo schlitz trust fund pork belly woke organic kogi pabst. Seitan authentic salvia locavore, helvetica tousled marfa schlitz messenger bag hashtag.
            </p>
        </div>
        <div>
            <h2>Tiimi</h2>
            <TiimiJäsen nimi={"Moii"}/>
        </div>
        <div className="contact-container">
            <p>
                voimaaytimesta@gmail.com
            </p>
        </div>
        </>
    )
}