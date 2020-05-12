import React from 'react'
import './Yleinen.css'
import paastot from './images/co2elinkaaripäästöt.jpg'
const Ympäristö = () => {
    return(
        <div className="yleis-container">
            <div className="content">
            <div className="text-container">
                <h2>Ydinvoimaloiden elinkaaripäästöt</h2>

                <p>Ydinvoimaloiden elinkaaripäästöt vertautuvat tuulivoimaan, sillä vähäiset kasvihuonekaasu päästöt aiheutuvat ydinvoiman tuotantoketjussa materaalien ja polttoaineiden hankinnasta, laitevalmistuksesta, kuljetuksista ja laitosten rakentamisesta ja purkamisesta. Ydinvoimalla voidaan tuottaa suuri määriä energiaa todella pienillä hiilidioksidipäästöillä, ja siksi se on hyvä vaihtoehto pyrkimyksissä kohti dramaattisia toimia vaativia ilmastotavoitteita. 
                </p>
                <img className="responsive-image" src={paastot} alt="kaavio"/>
            </div>
           
            <div className="text-container">
                <h2>Sähköntuotanto ydinvoimalla</h2>

                <p>Ydinsähkön tuottaminen perustuu uraaniydinten halkeamiseen ja siitä vapautuvaan energiaan. Sähkön tuotantoprosessissa ydinvoimalla ei siis vapaudu lainkaan hiilidioksidia, ja ydinvoima ei aiheuta käytännössä ollenkaan happamoittavia tai ilmastonmuutosta kiihdyttäviä päästöjä. Uraani on yleinen alkuaine kaikkialla maaperässä, ja sen on arvioitu riittävän kymmeniksi vuosiksi. 
                </p>
            </div>
            <div className="text-container">
                <h2>Ydinjätehuolto</h2>

                <p>Ydinenergian tuotannossa syntyy radioaktiivista ydinjätettä, ja energialain mukaan kaikki Suomessa syntyvä ydinjäte on käsiteltävä ja loppusijoitettava Suomessa. Suomessa ollaan ensimmäisten joukossa ottamassa käyttöön ydinjätteen loppusijoitus peruskallioon, joka takaa ettei ydinjätteestä aiheudu haittaa ihmisille tai luonnolle. Vakaaseen peruskallioon rakennettu loppusijoitustila Onkalo ulottuu noin 450 syvyyteen, jonne suojakapseleihin tiivisti suljettu ydinjäte voidaan sijoittaa odottamaan säteilyn palaamista normaaliksi. Ydinjätehuollon suunnittelusta ja valvonnasta vastaavat Suomessa työ- ja elinkeinoministeriö ja Säteilyturvakeskus. 
                </p>
            </div>
            <div className="text-container">
                <h2>Ydinvoimalan vaikutukset ympäristöön</h2>

                <p>Ydinvoimalaitoksista ympäristöön, esimerkiksi ilmaan ja veteen, joutuville päästöille on asetettu päästörajat. Päästöjä valvotaan säännöllisesti mittauksilla ydinvoimalaitosten ympäristöstä erilaisten säteilyannos- ja radioaktiivisuusmittausten avulla. Suomessa ydinvoimalaitosten ympäristövaikutukset ovat koko käyttöajan pieniä, ja päästöt vain murto-osan sallituista arvoista. Sallittu radioaktiivisten aineiden päästö ympäristöön määritellään siten, että kukaan laitoksen lähistöllä asuva ei voi saada päästöjen aiheuttamana suurempaa kuin 0,1 millisievertin säitelyannosta vuodessa. Suomessa nämä säitelyannokset ovat kuitenkin olleet vain muutaman prosentin sallitusta raja-arvosta, ja esimerkiksi luonnon taustasäteily aiheuttaa suomalaisille keskimäärin 3,7 millisievertin säitelyannoksen vuodessa. 
                </p>
            </div>
            <div className="text-container">
                <h2>Lue lisää</h2>
                <p>
                    <a href="https://www.stuk.fi/stuk-valvoo/ympariston-sateilyvalvonta">Ympäristön säitelyvalvonta (STUK)</a>
                    <br/> <br/>
                    <a href="https://www.stuk.fi/aiheet/ydinjatteet/kaytetyn-polttoaineen-loppusijoitus-suomessa">Ydinjätteen loppusijoitus (STUK)</a>
                </p>
            </div>
            <div className="text-container">
                <h2>Lähteet</h2>
                <p>
                    <a href="https://www.fortum.fi/tietoa-meista/yhtiomme/energiantuotantomme/voimalaitoksemme/loviisan-voimalaitos/ymparistovaikutukset">Fortum (ympäristövaikutukset)</a>
                    <br></br>
                    <a href="https://www.fortum.fi/media/2016/11/ydinvoiman-kaytetyn-polttoaineen-loppusijoitus-hoidetaan-suomessa-huolella">Fortum (loppusijoitus)</a>
                    <br></br>
                    <a href="https://www.tvo.fi/vastuullisuus/ymparistojailmastoystavallisyys/ymparistovaikutukset.html">Teollisuuden voima</a>
                    <br></br>
                    <a href="https://energiamaailma.fi/mista-virtaa/ydinvoima/">Energiamaailma</a>
                    <br></br>
                    <a href="https://www.vattenfall.fi/sahkosopimukset/tuotantomuodot/ydinvoima/">Vattenfall</a>
                    <br></br>
                    <a href="https://ilmasto-opas.fi/fi/ilmastonmuutos/hillinta/-/artikkeli/ed54e5ef-47f6-41b9-bb5d-8d7b72323571/ydinvoima-on-vahapaastoista-energiaa.html#h_Ydins_hk_n_elinkaarip_st_t_vertautuvat_uusiutuvilla_energial_hteill_tuotettuihin_p_st_ihin
">Ilmasto-opas</a>
                    <br></br>
                    <a href="https://ats-fns.fi/images/files/general/ydinenergia_ja_suomi_2006.pdf">Suomen atomiteknillinen seura: Ydinenergia ja Suomi</a>
                    <br></br>
                    <a href="https://energia.fi/files/277/ht_ydinvoimasta.pdf">Energiateollisuus</a>
                </p>
            </div>
            </div>
        </div>
    )
}

export default Ympäristö