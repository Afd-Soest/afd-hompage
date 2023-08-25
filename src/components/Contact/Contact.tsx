import React from "react";
import "./Contact.css";
import Email from "../../assets/images/Icons/email.png";
import Telegram from "../../assets/images/Icons/telegram.png";
import Phone from "../../assets/images/Icons/phone.png";
import Instagram from "../../assets/images/Icons/instagram.png";
import Facebook from "../../assets/images/Icons/facebook.png";

const Contact = () => {
  return (
    <section id="contact" className="firstSector">
      <div className="media">
        <h2 className="gradient-color">Kontakt-Möglichkeiten</h2>
        <ul className="social">
          <li>
            <img src={Telegram} />
            Telegram:{" "}
            <a href="https://t.me/AfD_KV_Soest" target="_blank">
              AfD_KV_Soest
            </a>
          </li>
          <li>
            <img src={Instagram} />
            Instagram:{" "}
            <a href="https://www.instagram.com/afd_kv_soest/" target="_blank">
              AfD_KV_Soest
            </a>
          </li>
          <li>
            <img src={Facebook} />
            Facebook:{" "}
            <a href="https://www.facebook.com/afd.soest/" target="_blank">
              AfD.Soest
            </a>
          </li>

          <li>
            <img src={Phone} />
            Telefon: <a href="tel:+4917643831682">0176 438 316 82</a>
          </li>
          <li>
            <img src={Email} style={{ padding: "0px 4px 0px 6px" }} />
            Email: <a href="mailto:info@afd-soest.de">info@afd-soest.de</a>
          </li>
        </ul>
      </div>
      <div className="email">
        <h2>Ihr Nachricht an die AfD Soest</h2>
        <p className="text">Ihr Name *</p>
        <input type="text" placeholder="Max Mustermann" required></input>
        <p className="text">Ihre E-Mail-Adresse *</p>
        <input
          type="email"
          placeholder="max@example.de"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
        ></input>
        <p className="text">Betreff *</p>
        <input type="text" placeholder="Betreff" required></input>
        <p className="text">Ihre Nachricht *</p>
        <textarea placeholder="Ihre Nachricht" required></textarea>
        <p>
          <button className="btn">Absenden</button>
        </p>
      </div>
    </section>
  );
};

export default Contact;
