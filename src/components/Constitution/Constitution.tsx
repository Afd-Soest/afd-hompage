import Icon from "../../assets/images/Icons/link.png";
import { links } from "./Links";
import "./Constitution.css";

const Constituion = () => {
  return (
    <section id="constituion" className="firstSector">
      <h2 className="headline">Satzung und Ordnung</h2>
      <div className="links">
        {links.map((item, index) => (
          <a key={index} href={item.getLink()} target="_blank" className="link">
            <div className="headerBx">
              <img src={Icon} className="img"></img>
              <h3 className="title">{item.getName()}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Constituion;
