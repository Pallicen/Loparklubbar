
import EventList from "../EventList";

const Events = () => {
  return (
    <div className="event">

      <div className="eventTitle">
        <p>Kommande Lopp & Events</p>
      </div>

      <div className="selectWrapper">
          <label>Distans (km)</label>
          <select>
            <option>1-7</option>
            <option>7-15</option>
            <option>15+</option>
          </select>
      </div>

      <EventList />

    </div>
)};

export default Events;