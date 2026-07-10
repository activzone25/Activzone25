import { Link } from "react-router-dom";
import "./Header.css";

import {
  FiSearch,
  FiHeart,
  FiShoppingCart
} from "react-icons/fi";

function Header() {
  return (
    <>
      {/* Banner superior */}
      <div className="top-banner">
        🚚 Envío gratis | ⭐ Parches GRATIS | 👕 Personalización incluida
      </div>

      {/* Header principal */}
      <header className="header">

        {/* Logo */}
        <Link to="/" className="logo">
          <span className="logo-blue">ACTIV</span>ZONE25
        </Link>

        {/* Menú */}
        <nav className="menu">
          <Link to="/">Inicio</Link>
          <Link to="/adulto">Adulto</Link>
          <Link to="/nino">Niño</Link>
        </nav>

        {/* Acciones */}
        <div className="header-actions">

          <button className="icon-btn" aria-label="Buscar">
            <FiSearch />
          </button>

          <button className="icon-btn" aria-label="Favoritos">
            <FiHeart />
            <span className="badge">0</span>
          </button>

          <button className="icon-btn" aria-label="Carrito">
            <FiShoppingCart />
            <span className="badge">0</span>
          </button>

          <a
            href="https://wa.me/34647602998"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            WhatsApp
          </a>

        </div>

      </header>
    </>
  );
}

export default Header;