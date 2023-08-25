import React from "react";
import "./AboutUs.css";
import pic from "../../assets/images/homescreen/Übersicht.png";
const AboutUs = () => {
  return (
    <section id="about">
      <h2 className="headline">Über uns</h2>
      <div className="content">
        <div className="text">
          <p>
            Wir sind Ihre politische Alternative im Kreis Soest. Als
            freiheitlich-konservative Partei setzen wir uns für die Bewahrung
            unserer Kultur und für Ihre persönliche Freiheit ein.
          </p>
          <p>
            Wenn Sie uns näher kennenlernen oder unterstützen wollen, ob als
            Wähler, Wahlkampfhelfer oder Spender, finden Sie hier die nötigen
            Informationen.
          </p>
        </div>
        <div className="imgBx">
          <img src={pic}></img>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
