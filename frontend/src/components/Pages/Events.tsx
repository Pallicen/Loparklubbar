
import EventList from "../EventList";

const Events = () => {
  return (
    <div className="event">

      <div className="eventTitle">
        <p>Kommande Lopp & Events</p>
      </div>

      <div className="runclub-container">

      <div className="filter-container">
        <div className="filter">

      <div className="selectWrapper">
          <label>Distans (km)</label>
          <select>
            <option value="">Välj</option>
            <option>1-5</option>
            <option>6-15</option>
            <option>16+</option>
          </select>
      </div>

      <div className="selectWrapper">
          <label>År</label>
          <select>
            <option value="">Välj</option>
            <option>2026</option>
            <option>2027</option>
            <option>2028</option>
          </select>
      </div>

    </div>
  </div>

      <EventList />

    </div>

  </div>
)};

export default Events;