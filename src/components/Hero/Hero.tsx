import React from "react";
import "./Hero.css";
import Picture from "../../assets/images/homescreen/Lippstädter Wasserturm.png";

const Hero = () => {
  return (
    <section id="hero" className="firstSector">
      <img src={Picture} className="background" />
      <div className="text">
        <h2 className="title">
          Mitglied, Wähler oder einfach interessierter Bürger?
        </h2>
        <p className="secTitle">
          Melden Sie sich gerne bei uns und besuchen Sie unsere Veranstaltungen.
        </p>
        <div className="contact">
          <div className="first">
            <h2>Ihre Nachricht an die AfD Soest</h2>
            <p className="names">Ihr Name *</p>
            <input type="text" placeholder="Max Mustermann" required></input>
            <p className="names">Ihre E-Mail-Adresse *</p>
            <input
              type="email"
              placeholder="max@example.de"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
            ></input>
          </div>
          <div className="secound">
            <p className="names">Betreff *</p>
            <input type="text" placeholder="Betreff" required></input>
            <p className="names">Ihre Nachricht *</p>
            <textarea placeholder="Ihre Nachricht" required></textarea>
          </div>
          <div className="btn">Absenden</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
