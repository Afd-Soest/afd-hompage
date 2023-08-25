import { events } from "./Event";
import "./UpcomingEvents.css";

const UpcomingEvents = () => {
  return (
    <section id="upcomingEvents">
      <div className="title">
        <h2 className="headline">Bevorstehende Veranstaltungen</h2>
      </div>
      <div className="content">
        {events.map((item, index) => (
          <div key={index} className="upcomingEventsBx">
            <img src={item.getPicture()} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;
