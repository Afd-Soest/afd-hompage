import Icon from "../../assets/images/Icons/link.png";
import { links } from "./Links";
import { Typ } from "./Typ";
import "./Constitution.css";

const Constituion = () => {
  return (
    <section id="constituion" className="firstSector">
      <h2 className="headline">Satzung und Ordnung</h2>
      <div id="linkContainer">
        <div className="links">
          <div className="linkItem">
            <div className="linkmid">
              <h2>Kreissatzung</h2>
              {links.map((item, index) =>
                item.getTyp() == Typ.Kreis ? (
                  <a
                    key={index}
                    href={item.getLink()}
                    target="_blank"
                    className="link"
                  >
                    <div className="headerBx">
                      <img src={Icon} className="img"></img>
                      <h3 className="title">{item.getName()}</h3>
                    </div>
                  </a>
                ) : null
              )}
            </div>
          </div>
          <div className="linkItem">
            <div className="linkmid">
              <h2>Bezirkssatzung</h2>
              {links.map((item, index) =>
                item.getTyp() == Typ.Bezirk ? (
                  <a
                    key={index}
                    href={item.getLink()}
                    target="_blank"
                    className="link"
                  >
                    <div className="headerBx">
                      <img src={Icon} className="img"></img>
                      <h3 className="title">{item.getName()}</h3>
                    </div>
                  </a>
                ) : null
              )}
            </div>
          </div>
          <div className="linkItem">
            <div className="linkmid">
              <h2>Landessatzungen</h2>
              {links.map((item, index) =>
                item.getTyp() == Typ.Land ? (
                  <a
                    key={index}
                    href={item.getLink()}
                    target="_blank"
                    className="link"
                  >
                    <div className="headerBx">
                      <img src={Icon} className="img"></img>
                      <h3 className="title">{item.getName()}</h3>
                    </div>
                  </a>
                ) : null
              )}
            </div>
          </div>
          <div className="linkItem">
            <div className="linkmid">
              <h2>Bundessatzungen</h2>
              {links.map((item, index) =>
                item.getTyp() == Typ.Bund ? (
                  <a
                    key={index}
                    href={item.getLink()}
                    target="_blank"
                    className="link"
                  >
                    <div className="headerBx">
                      <img src={Icon} className="img"></img>
                      <h3 className="title">{item.getName()}</h3>
                    </div>
                  </a>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Constituion;
