import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { api, type EventDto } from "../../api";

const EventList = () => {

  const [events, setEvents] = useState<EventDto[]>([]);

  useEffect(() => {

    async function loadEvents() {

      try {

        const data = await api.getEvents();

        setEvents(data);

      } catch (err) {
        console.error(err);
      }
    }

    loadEvents();

  }, []);

  return (
    <div className="EventCards">

      {events.map((event) => (
        <EventCard
          key={event.id}
          title={event.title}
          description={event.description}
          distance={event.distance}
          eventLink={event.eventLink}
        />
      ))}

    </div>
  );
};

export default EventList;