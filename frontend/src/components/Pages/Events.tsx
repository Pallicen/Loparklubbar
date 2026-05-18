
import { useState } from "react";
import EventList from "../EventList";

const Events = () => {

  const [selectedDistance, setSelectedDistance] = useState("");

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
          <select
            value={selectedDistance}
            onChange={(e) => setSelectedDistance(e.target.value)}
          >
            <option value="">Välj</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="5-10">5-10</option>
                  <option value="10">10</option>
                  <option value="10-15">11-14</option>
                  <option value="15">15</option>
                  <option value="15-20">15-20</option>
                  <option value="21">21</option>
                  <option value="22-30">22-30</option>
                  <option value="30-41">30-41</option>
                  <option value="42">42</option>
                  <option value="43-50">43-50</option>
                  <option value="51-60">51-60</option>
                  <option value="92">92</option>
                  <option value="100">100</option>
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

      <EventList selectedDistance={selectedDistance} />

    </div>

  </div>
)};

export default Events;