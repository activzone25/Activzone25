import { Link } from "react-router-dom";
import { FiX, FiHome, FiHeart, FiShoppingCart, FiMessageCircle, FiInfo } from "react-icons/fi";

import "./SideMenu.css";

function SideMenu({ open, setOpen }) {
  return (
    <>
      <div
        className={`menu-overlay ${open ? "active" : ""}`}
        onClick={() => setOpen(false)}
      />

      <aside className={`side-menu ${open ? "active" : ""}`}>

        <div className="menu-header">
          <h2>ACTIVZONE25</h2>

          <button onClick={() => setOpen(false)}>
            <FiX />
          </button>
        </div>

        <nav>

          <Link to="/" onClick={() => setOpen(false)}>
            <FiHome />
            Inicio
          </Link>

          <Link to="/adulto" onClick={() => setOpen(false)}>
            👕 Adulto
          </Link>

          <Link to="/nino" onClick={() => setOpen(false)}>
            🧒 Niño
          </Link>

          <Link to="/favoritos" onClick={() => setOpen(false)}>
            <FiHeart />
            Favoritos
          </Link>

          <button onClick={() => setOpen(false)}>
            <FiShoppingCart />
            Carrito
          </button>

          <a
            href="https://wa.me/34647602998"
            target="_blank"
            rel="noreferrer"
          >
            <FiMessageCircle />
            WhatsApp
          </a>

          <Link to="/contacto" onClick={() => setOpen(false)}>
            <FiInfo />
            Contacto
          </Link>

        </nav>

      </aside>
    </>
  );
}

export default SideMenu;