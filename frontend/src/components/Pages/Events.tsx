import Card from "../EventCard";
import imageStrava from "/src/assets/stravaLog.png";
import imageNike from "/src/assets/nikeLog.png";

const Events = () => {
  return (
    <div>

      <div className="eventTitle">
        <p>Kommande Lopp & Events</p>
      </div>

      <Card title={""} description={""} link={""} />

      <div className="partnership">
        <p>I samarbete med</p>
        <img src={imageStrava} alt="stravabild"/>
        <img src={imageNike} alt="nikebild"/>
      </div>
    </div>
)};

export default Events;