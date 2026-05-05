import React from 'react';
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
                <h3>{title} Stadslöpning + Fika</h3>
                <br></br>
                <p>{description} Vi är en klubb som springer 3-7 km varje torsdag kl.17.30 och tar en fika efter passet. Vi fokuserar på att få in rörelse i vardagen och gemenskap. Alla är välkomna oavsett nivå!</p> <br/>
                <p><span>Stad:</span> {city} Jönköping</p>
                <p><span>Nivå:</span> {level} Medel</p>
                <p><span>Dag & Tid:</span> {when} Onsdagar 17.30</p>
                <p><span>Social Media:</span>{' '} <a href={socialMediaLink}>Länk</a></p>
           </div>
            <div className='RunClubImageInCard'>
                <img src={ runclubimg3 } alt='BILD'></img>
            </div>
        </div>

        <div className="RunclubCard">
          <div className='RunclubDescriptionInCard'>
                <h3>{title} Löpning för kvinnor</h3>
                <br></br>
                <p>{description} Vi är en klubb som springer 5-10 km varje lördag kl.10.00. Vi vill att kvinnor i åldern 20-30 år ska utvecklas i löpning och hitta likasinnade. Kom och prova på!</p> <br/>
                <p><span>Stad:</span> {city} Jönköping</p>
                <p><span>Nivå:</span> {level} Medel</p>
                <p><span>Dag & Tid:</span> {when} Lördagar 9.30</p>
                <p><span>Social Media:</span> <a href={socialMediaLink}>Länk</a></p>
           </div>
            <div className='RunClubImageInCard'>
                <img src={ runclubimg2 } alt='Runclubimg'></img>
            </div>
        </div>

    </div>
  );
};

export default RunclubCard;