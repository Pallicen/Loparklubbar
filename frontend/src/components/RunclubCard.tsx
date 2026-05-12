

interface CardPropsRunclub {
  name: string;
  description: string;
  city: string;
  level: string;
  time: string;
  socialMediaLink: string;
  image: string;
}

const RunclubCard = ({
  name,
  description,
  city,
  level,
  time,
  socialMediaLink,
  image
}: CardPropsRunclub) => {

  return (
    <div className="RunclubCard">

      <div className="RunclubDescriptionInCard">

        <h3>{name}</h3>

        <p className="RunclubDescription">{description}</p>

        <div className="RunclubMeta">
          <span className="RunclubBadge">📍 {city}</span>
          <span className="RunclubBadge">🏃 {level}</span>
          <span className="RunclubBadge">🕐 {time}</span>
        </div>

        <a className="RunclubLink" href={socialMediaLink} target="_blank" rel="noopener noreferrer">
          Sociala medier →
        </a>

      </div>

      <div className="RunClubImageInCard">
        <img src={image} alt={name} />
      </div>

    </div>
  );
};

export default RunclubCard;