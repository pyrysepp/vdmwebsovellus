import React from 'react';
import './Home.css'

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
                <h2>Tähän kampanjan esittely ja pääviestien kiteytys?</h2>
                <p>I'm baby pok pok kombucha keytar gluten-free, unicorn man braid semiotics 90's truffaut celiac williamsburg microdosing retro lyft sriracha. Franzen poutine post-ironic hexagon, shoreditch polaroid art party food truck air plant vice pabst bitters selfies pour-over vinyl. Tacos meggings retro next level forage pitchfork heirloom narwhal freegan craft beer lumbersexual +1 fanny pack unicorn. Four loko blue bottle scenester sustainable master cleanse tote bag.

                    Brooklyn hella +1 twee brunch mustache. Four loko selfies lyft pork belly, offal farm-to-table iPhone bicycle rights street art hammock pickled. YOLO succulents irony hoodie tilde tumblr. Tousled knausgaard schlitz, gochujang retro celiac dreamcatcher viral kombucha vinyl. Hella authentic pickled narwhal, 90's succulents raw denim literally marfa. Man bun single-origin coffee ugh mlkshk activated charcoal letterpress, selfies glossier.
                    Pop-up fingerstache kogi narwhal meh. Tumblr jianbing master cleanse selfies retro meditation. Tote bag lyft seitan selfies. Pop-up jean shorts marfa, scenester kogi biodiesel locavore. Shoreditch occupy jianbing chillwave put a bird on it direct trade typewriter. Schlitz vaporware pug, paleo taiyaki food truck brooklyn drinking vinegar cray normcore stumptown.

                    Cronut la croix pickled copper mug. Typewriter bitters plaid chia lomo. Fam squid butcher keffiyeh cold-pressed skateboard mumblecore iPhone deep v tumeric pug migas lo-fi master cleanse. Bicycle rights man braid paleo, chillwave master cleanse next level wayfarers put a bird on it plaid marfa kickstarter actually seitan everyday carry. Everyday carry activated charcoal yuccie street art thundercats gentrify typewriter portland neutra 8-bit.

                </p>
            </div>
            <div className="video-container">
                <p>Tähän tulee video?</p>
            </div>
        </div>
        </div>
        </>
    )
}