import React from "react";

interface CardPropsRunclub {
  title: string;
  description: string;
  city: string;
  level: string;
  when: string;
  socialMediaLink: string;
  image: string;
}

const RunclubCard: React.FC<CardPropsRunclub> = ({
  title,
  description,
  city,
  level,
  when,
  socialMediaLink,
  image,
}) => {
  return (
    <div className="RunclubCards">
      <div className="RunclubCard">
        <div className="RunclubDescriptionInCard">
          <h3>{title}</h3>
          <br></br>
          <p>{description}</p> <br />
          <p><span>Stad:</span> {city}</p>
          <p><span>Nivå:</span> {level}</p>
          <p><span>Dag & Tid:</span> {when}</p>
          <p><span>Social Media:</span>{" "} <a href={socialMediaLink} target="_blank" rel="noreferrer">Besök sociala medier (öppnas i ny flik)</a></p>
        </div>
        {image && (
          <div className="RunClubImageInCard">
            <img src={image} alt={title}></img>
          </div>
        )}
      </div>
    </div>
  );
};

export default RunclubCard;
