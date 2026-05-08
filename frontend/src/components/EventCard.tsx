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
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noreferrer">Länk till anmälan</a>
      </div>
    </div>
  );
};

export default EventCard;
