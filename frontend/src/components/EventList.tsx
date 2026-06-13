import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { api, type EventDto } from "../api";

interface EventListProps {
  selectedDistance: string;
}

const EventList = ({ selectedDistance }: EventListProps) => {

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

    const filteredEvents = events.filter((event) => {

    const distanceMatch = 
      selectedDistance === "" || event.distance === selectedDistance;

    return distanceMatch;
  });

  return (
    <div className="EventCards">

      {filteredEvents.map((event) => (
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