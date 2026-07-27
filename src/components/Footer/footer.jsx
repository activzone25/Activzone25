import {
  FiInstagram,
  FiFacebook,
  FiMessageCircle,
  FiMail
} from "react-icons/fi";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <h2>ACTIVZONE25</h2>

          <p>
            Camisetas de fútbol 2026/27 de máxima calidad con
            personalización y parches oficiales.
          </p>

        </div>

        <div className="footer-links">

          <h3>Enlaces</h3>

          <a href="#productos">
            Productos
          </a>

          <a href="#">
            Personalización
          </a>

          <a href="#">
            Contacto
          </a>

        </div>

        <div className="footer-contact">

          <h3>Contacto</h3>

          <p>
            <FiMail /> activzone25@gmail.com
          </p>

          <p>
            <FiMessageCircle /> +34 647 602 998
          </p>

        </div>

        <div className="footer-social">

          <h3>Síguenos</h3>

          <div className="social-icons">

            <a href="#">
              <FiInstagram />
            </a>

            <a href="#">
              <FiFacebook />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        © {new Date().getFullYear()} ACTIVZONE25 · Todos los derechos reservados.

      </div>

    </footer>
  );
}

export default Footer;