import "./Navigation.css";
import logo from "../../assets/images/Logo/Logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isNavOpen, setIsNavOpen] = useState(false);
  function changeSelectedIndex(newIndex: number) {
    setSelectedIndex(newIndex);
  }

  return (
    <>
      <header className={isNavOpen ? "active" : ""}>
        <Link to="/" onClick={() => changeSelectedIndex(-1)}>
          <img src={logo} className="logo"></img>
        </Link>

        <nav>
          <ul className="nav">
            <li className={selectedIndex === 0 ? "active" : ""}>
              <input type="checkbox" id="checkbox_partei"></input>
              <label htmlFor="checkbox_partei">
                Partei
                <div
                  style={{
                    fontSize: "0.7em",
                    position: "relative",
                    left: "5px",
                    top: "5px",
                  }}
                >
                  &#9660;
                </div>
              </label>
              <ul className="expended_ul">
                {/* <li onClick={() => changeSelectedIndex(100)}>
                  <Link to="/unser-vorstand">Unser Vorstand</Link>
                </li> */}
                <li onClick={() => changeSelectedIndex(100)}>
                  <Link to="/satzung">Satzung</Link>
                </li>
                <li>
                  <a href="https://afd-bezirk-arnsberg.de/" target="_blank">
                    Bezirksverband
                  </a>
                </li>
                <li>
                  <a href="https://afd.nrw/" target="_blank">
                    Landesverband
                  </a>
                </li>
                <li>
                  <a href="https://www.afd.de/" target="_blank">
                    Bundesverband
                  </a>
                </li>
              </ul>
            </li>
            <li
              className={selectedIndex === 1 ? "active" : ""}
              onClick={() => changeSelectedIndex(1)}
            >
              <input type="checkbox" id="checkbox_program"></input>
              <label htmlFor="checkbox_program">
                Programm
                <div
                  style={{
                    fontSize: "0.7em",
                    position: "relative",
                    left: "5px",
                    top: "5px",
                  }}
                >
                  &#9660;
                </div>
              </label>
              <ul className="expended_ul">
                <li>
                  <a
                    href="https://www.afd.de/europa-neu-denken/"
                    target="_blank"
                  >
                    Europawahlprogramm
                  </a>
                </li>
                <li>
                  <a href="https://www.afd.de/wahlprogramm/" target="_blank">
                    Bundestagswahlprogramm
                  </a>
                </li>
                <li>
                  <a
                    href="https://afd.nrw/wp-content/uploads/sites/2/2022/03/AfD-NRW-Wahlprogramm-Landtagswahl-NRW-2022.pdf"
                    target="_blank"
                  >
                    Landtagswahlprogramm
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.afd.de/grundsatzprogramm/"
                    target="_blank"
                  >
                    Grundsatzprogramm
                  </a>
                </li>
              </ul>
            </li>
            <li value="3">
              <a
                href="https://www.jungealternative-arnsberg.de/"
                target="_blank"
              >
                Junge Alternative
              </a>
            </li>
            <li
              className={selectedIndex === 2 ? "active" : ""}
              onClick={() => changeSelectedIndex(2)}
            >
              <Link to="/spenden">Spenden</Link>
            </li>
          </ul>
        </nav>

        <div className="btn">
          <a
            href="https://www.afd.de/mitglied-werden/#onlineantrag"
            target="_blank"
          >
            Mitglied werden
          </a>
        </div>
        <div
          className="menuToggle"
          onClick={() => setIsNavOpen(!isNavOpen)}
        ></div>
      </header>
    </>
  );
};

export default Navigation;
