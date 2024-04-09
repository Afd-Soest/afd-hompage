import "./PastEventsComplete.css";
import { Event } from "../PastEvents/Event";
import { events } from "../PastEvents/Events";
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

const PastEventsComplete = () => {
  const { id } = useParams();
  const index: number = typeof id === "string" ? parseInt(id) : -1;
  console.log(index);
  const event = events[index];
  return (
    <section id="pastEventComplete" className="firstSector">
      <img src={event.getPicture()} />
      <div className="text">
        <h3 className="date">{event.getDate()}</h3>
        <h2 className="title">{event.getTitle()}</h2>
        <div className="info">
          {event.getText().map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <Link to="/">Zurück</Link>
      </div>
    </section>
  );
};

export default PastEventsComplete;
