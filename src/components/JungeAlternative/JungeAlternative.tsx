import "./JungeAlternative.css";
import { useState } from "react";
import tim from "./../../assets/images/jungeAlternative/Tim_Weiß.png";
import telegram from "./../../assets/images/jungeAlternative/QR_Telegram_Weiß.png";
import insta from "./../../assets/images/jungeAlternative/QR_Insta_Weiß.png";

const JungeAlternative = () => {
  return (
    <section id="JA">
      <h2 className="gradient-color title">Junge Alternative Kreis Soest</h2>
      <div className="info">
        <div className="person">
          <img className="pic" src={tim} />
          <label>Kreisbeauftragter</label>
          <label>Tim Bronheim</label>
        </div>
        <div className="contact">
          <label>Telefon: 02938/555 9000</label>
          <label>Email: kontakt@JA-kreis-soest.de</label>
          <label>Postfach: 1021/59463 Ense</label>
          <div className="qr-code">
            <a
              href="https://www.instagram.com/ja.kreis.soest?utm_source=qr&igsh=MWtranFrdHBoOHhnZQ=="
              target="_blank"
            >
              <img className="insta" src={insta}></img>
            </a>
            <a href="https://t.me/ja_kreis_soest" target="_blank">
              <img className="telegram" src={telegram}></img>
            </a>
          </div>
        </div>
      </div>
      <div className="links">
        <button className="membership">
          <a href="https://jungealternative.net/antrag/" target="_blank">
            Jetzt Mitglied werden
          </a>
        </button>
        <div className="verband">
          <button>
            <a href="https://www.jungealternative-arnsberg.de/" target="_blank">
              Bezirk
            </a>
          </button>
          <button>
            <a href="https://janrw.de/" target="_blank">
              Landesverband
            </a>
          </button>
          <button>
            <a href="https://jungealternative.net/" target="_blank">
              Bundesverband
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default JungeAlternative;
