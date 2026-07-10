import { Link } from "react-router-dom";
import "./Header.css";

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
        <div className="logo">
          <span className="logo-blue">ACTIV</span>ZONE25
        </div>

        {/* Menú */}
        <nav className="menu">
          <Link to="/">Inicio</Link>
          <Link to="/adulto">Adulto</Link>
          <Link to="/nino">Niño</Link>
        </nav>

        {/* Acciones */}
        <div className="header-actions">
          <button className="icon-btn" aria-label="Buscar">
            🔍
          </button>

          <button className="icon-btn" aria-label="Favoritos">
            ❤️
            <span className="badge">0</span>
          </button>

          <button className="icon-btn" aria-label="Carrito">
            🛒
            <span className="badge">0</span>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;