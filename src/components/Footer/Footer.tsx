import "./Footer.css";
import Telegram from "../../assets/images/Icons/footer/telegram.png";
import Facebook from "../../assets/images/Icons/footer/facebook.png";
import Instagram from "../../assets/images/Icons/footer/instagram.png";
import Phone from "../../assets/images/Icons/footer/phone.png";
import Email from "../../assets/images/Icons/footer/email.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <ul className="social">
          <li>
            <a href="https://t.me/AfD_KV_Soest" target="_blank">
              <img src={Telegram} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/afd.soest/" target="_blank">
              <img src={Facebook} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/afd_kv_soest/" target="_blank">
              <img src={Instagram} />
            </a>
          </li>
          <li>
            <a href="tel:+4917643831682">
              <img src={Phone} />
            </a>
          </li>
          <li>
            <a href="mailto:info@afd-soest.de">
              <img src={Email} />
            </a>
          </li>
        </ul>
        <div className="footer-text">
          <p className="copyright">
            ©2021-2024 Alternative für Deutschland (AfD) | Kreisverband Soest.
          </p>
          <div className="footer-menu">
            <ul>
              <li>
                <Link to="/kontakt">Kontakt</Link>
              </li>
              |
              <li>
                <Link to="/impressum">Impressung</Link>
              </li>
              |
              <li>
                <Link to="/datenschutzerklaerung">Datenschutzerklärung</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
