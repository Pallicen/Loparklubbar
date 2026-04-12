import React from 'react';
import runclubimg1 from "../assets/runclubimg1.png";
import runclubimg2 from "../assets/runclubimg2.png";
import runclubimg3 from "../assets/runclubimg3.png";

interface CardPropsRunclub {
  title: string;
  description: string;
  city: string;
  level: string;
  when: string;
  socialMediaLink: string;
  image: string;
}

const RunclubCard: React.FC<CardPropsRunclub> = ({ title, description, city, level, when, socialMediaLink }) => {
  return (
    <div className='RunclubCards'>

        <div className="RunclubCard">
          <div className='RunclubDescriptionInCard'>
                <h3>{title} Titel på löparklubb</h3>
                <p>{description} Beskrivning</p>
                <p>Stad: {city}</p>
                <p>Nivå: {level}</p>
                <p>Dag & Tid: {when}</p>
                <p>Social Media: <a href={socialMediaLink}>Länk</a></p>
           </div>
            <div className='RunClubImageInCard'>
                <img src={ runclubimg1 } alt='BILD' />
            </div>
        </div>

        <div className="RunclubCard">
          <div className='RunclubDescriptionInCard'>
                <h3>{title} Stadslöpning + Fika</h3>
                <p>{description} Vi är en klubb som springer 3-7 km varje torsdag kl.17.30 och tar en fika efter passet. Vi fokuserar på att få in rörelse i vardagen och gemenskap. Alla är välkomna oavsett nivå!</p>
                <p>Stad: {city} Jönköping</p>
                <p>Nivå: {level} Medel</p>
                <p>Dag & Tid: {when} Onsdagar 17.30</p>
                <p>Social Media: <a href={socialMediaLink}>Länk</a></p>
           </div>
            <div className='RunClubImageInCard'>
                <img src={ runclubimg3 } alt='BILD'></img>
            </div>
        </div>

        <div className="RunclubCard">
          <div className='RunclubDescriptionInCard'>
                <h3>{title} Löpning för kvinnor</h3>
                <p>{description} Vi är en klubb som springer 5-10 km varje lördag kl.10.00. Vi vill att kvinnor i åldern 20-30 år ska utvecklas i löpning och hitta likasinnade. Kom och prova på!</p>
                <p>Stad: {city} Jönköping</p>
                <p>Nivå: {level} Medel</p>
                <p>Dag & Tid: {when} Lördagar 9.30</p>
                <p>Social Media: <a href={socialMediaLink}>Länk</a></p>
           </div>
            <div className='RunClubImageInCard'>
                <img src={ runclubimg2 } alt='Runclubimg'></img>
            </div>
        </div>

    </div>
  );
};

export default RunclubCard;