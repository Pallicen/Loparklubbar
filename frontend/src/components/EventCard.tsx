
interface CardPropsEvent {
  title: string;
  description: string;
  distance: string;
  eventLink: string;
}

const EventCard = ({
  title,
  description,
  distance,
  eventLink
}: CardPropsEvent) => {

  return (
    <div className="EventCard">
      <h3>{title}</h3>

      <p>{description}</p>

      <span><p>{distance}Km</p></span>

      <a href={eventLink} target="_blank">
      <span>Länk till anmälan: </span>{eventLink}
      </a>
    </div>
  );
};

export default EventCard;