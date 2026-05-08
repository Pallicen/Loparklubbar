
interface CardPropsEvent {
  title: string;
  description: string;
  eventLink: string;
}

const EventCard = ({
  title,
  description,
  eventLink
}: CardPropsEvent) => {

  return (
    <div className="EventCard">
      <h3>{title}</h3>

      <p>{description}</p>

      <span>Länk till anmälan:</span>
      <a href={eventLink} target="_blank">
      </a>
    </div>
  );
};

export default EventCard;