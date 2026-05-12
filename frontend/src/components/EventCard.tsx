
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

      <p>{distance}</p>

      <a href={eventLink} target="_blank">
      <span>Länk till anmälan: </span>{eventLink}
      </a>
    </div>
  );
};

export default EventCard;