import Divider from "../Divider/Divider";
import "./Donate.css";

const Donate = () => {
  return (
    <section id="dontation" className="firstSector">
      <h2>
        Spenden Sie heute, damit Sie auch morgen noch eine echte Wahl haben.
      </h2>
      <div className="content">
        <p>
          Unser Bundesland, Deutschland und Europa stehen vor großen
          Herausforderungen und Aufgaben. Die jetzigen politischen
          Entscheidungsträger verlagern nur all zu oft die Auswirkungen ihres
          ideologisch geprägten Handelns in die Zukunft unserer Kinder und
          Kindeskinder.
        </p>
        <p>
          Gerecht wäre jedoch, für eigenes Handeln auch selbst die Verantwortung
          zu übernehmen.
        </p>
        <p>
          Dafür brauchen wir Ihre besondere Unterstützung. Bitte helfen Sie mit,
          dass wir uns in den Wahlkämpfen ausreichend Gehör verschaffen können.
          In vielen Medien kommen wir nicht angemessen und ausgewogen zu Wort.
          Um die Wähler zu informieren, benötigen wir ausreichend
          Informationsmaterial und Werbemöglichkeiten. Wir müssen frühzeitig
          planen, bestellen und drucken und freuen uns über über Ihre Geld- oder
          Sachspende.
        </p>
        <p>
          Jetzt haben wir die Chance, die politische Landschaft zu verändern.
          Nutzen wir sie, machen Sie dabei mit, unterstützen Sie uns!
        </p>
        <p>
          Spenden und Mitgliedsbeiträge für die Alternative für Deutschland sind
          als Spenden an eine politische Partei nach §34g EStG in besonderem
          Maße steuerlich begünstigt. Bis zu einer Obergrenze von 1650 € für
          Alleinstehende / 3300 € für Ehepaare sind Ihre Spenden steuerlich
          absetzbar.
        </p>
        <p>
          Bitte geben Sie auf der Überweisung Ihre vollständige Adresse an,
          damit wir Ihnen eine Spendenquittung zukommen lassen können Dafür
          spenden Sie bitte - ganz gleich wieviel - auf folgendes Konto:
        </p>
      </div>
      <br />
      <h3>Alternative für Deutschland</h3>
      <div className="bank">
        <p>Sparkasse Soest</p>
        <p>BLZ: 41450075</p>
        <p>Kontonummer: 3015765</p>
        <p>IBAN: DE25 4145 0075 0003 0157 65</p>
        <p>BIC: WELADED1SOS</p>

        <div className="end">Vielen Dank!</div>
      </div>
    </section>
  );
};

export default Donate;
