import React from 'react'
import './Faq.css'


const Faq = () => {

    return(
        <div className="backround-container">
            <div className="faq-header-container">
                <div className="faq-header">
                    <h2>
                        Keskustelu
                    </h2>
                    <p>
                        Tältä sivulta löydät usein kysyttyjä kysymyksiä ja pääset osallistumaan keskusteluun jakamalla oman mielipiteesi sivun lopusta löytyvällä lomakkeella.
                    </p>
                </div>
            </div>
            <div className="faq-container">
                <div className="answer-container">
                    <h1>
                        Miksi ydinvoima on ilmastoystävällistä?
                    </h1>
                    <p>
                        Ydinenergian tuottaminen perustuu uraaniydinten halkeamiseen, jossa ei vapaudu ollenkaan hiilidioksidia tai muita kasvihuonekaasuja. Vähäisten hiilidioksidipäästöjen takia ydinvoima on erinomainen väliaikaisratkaisu pyrkimyksissä kohti hiilineutraalia energiantuotantoa.
                    </p>
                </div>
                <div className="answer-container">
                    <h1>
                        Miksi väitätte ydinvoiman olevan ympäristöystävällinen vaihtoehto, vaikka siitä syntyy ydinjätettä?
                    </h1>
                    <p>
                        Ydinvoima on ilmastoystävällistä, sillä ydinenergian tuotannossa ei vapaudu ilmastoa lämmittäviä kasvihuonekaasuja. Suomessa ollaan aloittamassa ydinjätteen loppusijoitusta vakaaseen peruskallioon odottamaan säteilyn palautumista normaaliksi, mikä takaa ettei jätteestä aiheudu haittaa ihmisille tai luonnolle.
                    </p>
                </div>
                <div className="answer-container">
                    <h1>
                        Miksi haluatte kampanjoida ydinvoiman puolesta?
                    </h1>
                    <p>
                        Kampanjamme tavoitteena on parantaa ydinvoiman mainetta vähentämällä ydinvoimaan liittyviä pelkoja ja ennakkoluuloja, ja lisäämällä tietoisuutta ydinvoiman ympäristövaikutuksista faktoihin ja tieteeseen pohjaten. Fossiilisista energimuodoista täytyy luopua, jotta ilmastonmuutos voitaisiin pysäyttää, ja ydinvoima voisi toimia nopeana väliaikaisena ratkaisuna ilmastokriisin hillitsemiseksi, sillä ydinenergian kasvihuonekaasupäästöt ovat todella pienet. 
                    </p>
                </div>
                <div className="answer-container">
                    <h1>
                        Miten loppusijoitus toimii ja onko se turvallista?
                    </h1>
                    <p>
                        Loppusijoituksessa ydinjäte sijoitetaan suojakapseleissa odottamaan säteilyn palautumista normaaliksi. Suomi on aloittamassa loppusijoitusta peruskallioon ensimmäisten joukossa maailmalla, ja Suomen vakaa peruskallio takaa mainiot olosuhteet pitkäaikaiselle sijoitukselle. Vaikka käytetty uraanipolttoaine säteilee pitkään, sen radioaktiivisuus laskee nopeasti ja syvälle kallioon sijoitetun ydinjätteen säteilyä ei voi havaita maanpinnalla. 
                    </p>
                </div>
                <div className="answer-container">
                    <h1>
                        Eikö ydinvoimala ole aina uhka ympäröivälle luonnolle ja ihmisille?
                    </h1>
                    <p>
                        Ydinvoimala ei ole uhka ympäröivälle luonnolla tai sen läheisyydessä asuville ihmisille. Suomessa ydinvoimalaitoksista ympäristöön päätyville päästöille on asetettu selkeät rajat, joita valvotaan säännöllisesti mittauksilla. Tämä radioaktiivisten aineiden päästö on Suomessa aina ollut korkeintaan muutaman prosentin sallitusta raja-arvosta, joka määritelty niin, ettei kukaan ydinvoimalan lähistöllä asuva voi saada yli 0,1 millisievertin säteilyannosta vuodessa päästöjen aiheuttamana. Esimerkiksi luonnon taustasäteily aiheuttaa suomalaisille tähän verrattuna moninkertaisen säteilyannoksen, keskimäärin 3,7 millisievertiä vuodessa.
                    </p>
                </div>
                <div className="answer-container">
                    <h1>
                        Miten ydinvoimalaonnettomuuksilta vältytään?
                    </h1>
                    <p>
                        Jo ydinvoimalaitosten suunnitteluvaiheessa varaudutaan erilaisiin onnettomuus- ja virhetilanteisiin, ja niiden varalle on kehitetty turvajärjestelmiä. Näin yksittäisten vikojen tai virheiden kehittyminen onnettomuuksiksi on estetty luotettavasti. Ydinvoimaloiden turvallisuus kehittyy koko aja uuden teknologian myötä, ja lisäksi Säteilyturvakeskus (STUK) varmistaa valvonnallaan, että kaikkia olemassa olevia turvallisuusmääräyksiä noudatetaan. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Faq