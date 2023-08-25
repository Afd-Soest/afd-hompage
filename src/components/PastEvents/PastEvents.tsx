import "./PastEvents.css";
import { events } from "./Events";
import { Link } from "react-router-dom";
const PastEvents = () => {
  return (
    <section id="pastEvents">
      <h2 className="title headline">Aktuelles aus dem Kreisverband</h2>
      <div className="content">
        {events.map((item, index) => (
          <Link
            to={`/event/${index}`}
            key={index}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="imgBx">
              <img src={item.getPicture()} />
              <div className="text">
                <h3 className="date">{item.getDate()}</h3>
                <h2>{item.getTitle()}</h2>
                <div className="info">
                  {item.getText().map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PastEvents;
