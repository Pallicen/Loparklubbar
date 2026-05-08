

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

        <p>{description}</p>

        <p>
          <span>Stad:</span> {city}
        </p>

        <p>
          <span>Nivå:</span> {level}
        </p>

        <p>
          <span>Dag & Tid:</span> {time}
        </p>

        <p>
          <span>Social Media:</span>{" "}
          <a href={socialMediaLink} target="_blank">
            Social media/webb länk
          </a>
        </p>

      </div>

      <div className="RunClubImageInCard">

        <img src={image} alt={name} />

      </div>

    </div>
  );
};

export default RunclubCard;