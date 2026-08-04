import { Link } from "react-router-dom";
import {
  FiInstagram,
  FiMessageCircle,
  FiMail
} from "react-icons/fi";

import "./Footer.css";

function Footer() {

    return (

        <footer className="footer">

            <div className="footer-container">

                <div>

                    <h2 className="footer-logo">
                        ACTIVZONE25
                    </h2>

                    <p className="footer-description">
                        Camisetas de fútbol temporada 2026/27 con calidad premium.
                        Personalización con nombre, dorsal y parches oficiales.
                    </p>

                </div>



                <div>

                    <h3 className="footer-title">
                        Navegación
                    </h3>

                    <div className="footer-links">

                        <Link to="/">
                            Inicio
                        </Link>

                        <Link to="/adulto">
                            Adulto
                        </Link>

                        <Link to="/favoritos">
                            Favoritos
                        </Link>

                    </div>

                </div>



                <div>

                    <h3 className="footer-title">
                        Contacto
                    </h3>

                    <div className="footer-social">

                        <a
                            href="#"
                            aria-label="Instagram"
                        >
                            <FiInstagram />
                        </a>

                        <a
                            href="#"
                            aria-label="WhatsApp"
                        >
                            <FiMessageCircle />
                        </a>

                        <a
                            href="mailto:info@activzone25.com"
                            aria-label="Email"
                        >
                            <FiMail />
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