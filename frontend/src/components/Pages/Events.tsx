import { useEffect, useState } from "react";
import Card from "../EventCard";
import { api } from "../../../api";
import type { EventDto } from "../../../api";

const Events = () => {
  const [events, setEvents] = useState<EventDto[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await api.event.list();
        setEvents(data);
      } catch (error) {
        setErrorMessage(error instanceof Error ? error.message : "Kunde inte hämta evenemang.");
      }
    };

    void loadEvents();
  }, []);

  return (
    <div className="event">

      <div className="eventTitle">
        <p>Kommande Lopp & Events</p>
      </div>

      {errorMessage && <p>{errorMessage}</p>}
      {events.map((event) => (
        <Card
          key={event.id}
          title={event.title}
          description={event.description}
          link={event.eventLink}
        />
      ))}

    </div>
)};

export default Events;
