import { resolveRunclubImageUrl } from "../../api";

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
  const imageUrl = resolveRunclubImageUrl(image);

  return (
    <div className="RunclubCard">

      <div className="RunclubDescriptionInCard">

        <h3>{name}</h3>

        <p className="RunclubDescription">{description}</p>

        <p>
          <span>Stad:</span> {city}
        </p>

        <p>
          <span>Nivå:</span> {level}
        </p>

        <p>
          <span>Dag & Tid:</span> {time}
        </p>


        <a href={socialMediaLink} target="_blank">
        <span>Social Media/Gym: </span>{socialMediaLink}
        </a>

        <p>
          <button className="subscribe-runclub-btn">Gå med</button>
        </p>


      </div>

      <div className="RunClubImageInCard">
        {imageUrl ? <img src={imageUrl} alt={name} /> : <p>Ingen bild angiven</p>}
      </div>

    </div>
  );
};

export default RunclubCard;

        