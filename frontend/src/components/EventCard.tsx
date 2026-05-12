
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

      <div className="EventCardHeader">
        <h3>{title}</h3>
        <span className="EventDistanceBadge">{distance}</span>
      </div>

      <p className="EventDescription">{description}</p>

      <a className="EventLink" href={eventLink} target="_blank">
        Anmäl dig →
      </a>

    </div>
  );
};

export default EventCard;