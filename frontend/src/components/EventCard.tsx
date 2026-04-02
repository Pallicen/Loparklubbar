import React from 'react';

interface CardPropsEvent {
  title: string;
  description: string;
  link: string;
}

const EventCard: React.FC<CardPropsEvent> = ({ title, description, link }) => {
  return (
    <div className='EventCards'>
        <div className="EventCard">
              <h3>{title} Titel på lopp, datum</h3>
              <p>{description} Beskrivning</p>
              <a href={link}>Länk till anmälan</a>
        </div>
        <div className="EventCard">
              <h3>Adidas Stockholm Marathon, 30 Maj 2026</h3>
              <p>Ett av Sveriges största och mest klassiska maratonlopp genom Stockholms vackra stadskärna. Tusentals löpare deltar varje år!</p>
              <a href="#">Länk till anmälan</a>
        </div>
        <div className="EventCard">
              <h3>Öland Marathon, 8 Augusti 2026</h3>
              <p>Långdistanslopp på den natursköna ön Öland.</p>
              <a href="#">Länk till anmälan</a>
        </div>
        <div className="EventCard">
              <h3>Kia Fjällmaraton, 28 Juli 2026</h3>
              <p>En av Nordens största fjällmaratonfestivaler med flera distanser genom Årefjällen.</p>
              <a href="#">Länk till anmälan</a>
        </div>
        <div className="EventCard">
              <h3>Jönköping Marathon & Half Marathon, 29 Augusti 2026</h3>
              <p>Marathon och halvmarathon i vacker sjöstadsmiljö.</p>
              <a href="#">Länk till anmälan</a>
        </div>
        <div className="EventCard">
              <h3>Kalmar Malkars, 27 Juni 2026</h3>
              <p>Halvmarathon vid Östersjökusten.</p>
              <a href="#">Länk till anmälan</a>
        </div>
    </div>
  );
};

export default EventCard;