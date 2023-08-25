import VorstandBack from "../../assets/images/Vorstand/Vorstand.jpg";
import { members } from "./Sprecher";
import { beisitzer } from "./Beisitzer";
import "./Vorstand.css";

const Vorstand = () => {
  return (
    <section id="vorstand" className="firstSector">
      <img className="banner" src={VorstandBack}></img>
      <h2 className="headline">Unser Vorstand</h2>

      <div className="members">
        <div className="vorstand">
          {members.map((item, index) => (
            <div key={index} className="membersBx">
              <div className="imgBx">
                <img className="person" src={item.getImage()} />
              </div>
              <div className="content">
                <h2 className="name">{item.getName()}</h2>
                <h2 className="role">{item.getRole()}</h2>
                <ul className="information">
                  {item.getInformation().map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                  <li>
                    <a href={"mailto:".concat(item.getEmail())}>
                      email: {item.getEmail()}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="beisitzer">
          {beisitzer.map((item, index) => (
            <div key={index} className="membersBx">
              <div className="imgBx">
                <img className="person" src={item.getImage()} />
              </div>
              <div className="content">
                <h2 className="name">{item.getName()}</h2>
                <h2 className="role">{item.getRole()}</h2>
                <ul className="information">
                  {item.getInformation().map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                  <li>
                    <a href={"mailto:".concat(item.getEmail())}>
                      email: {item.getEmail()}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vorstand;
