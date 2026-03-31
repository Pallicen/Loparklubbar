import React from 'react';

interface CardProps {
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description, link }) => {
  return (
    <div className='cards'>
        <div className="card">
              <h3>{title} Titel</h3>
              <p>{description} Beskrivning</p>
              <a href={link}>Länk till anmälan</a>
        </div>
        <div className="card">
              <h3>Adidas Stockholm Marathon, 30 Maj 2026</h3>
              <p>Ett av Sveriges största och mest klassiska maratonlopp genom Stockholms vackra stadskärna. Tusentals löpare deltar varje år.</p>
              <a href="#">Länk till anmälan</a>
        </div>
    </div>
  );
};

export default Card;