import { Link } from "react-router-dom";
import {
    FiHome,
    FiHeart,
    FiShoppingCart,
    FiUser,
    FiX
} from "react-icons/fi";

import "./SideMenu.css";

function SideMenu({ open, onClose }) {

    return (
        <>
            <div
                className={`menu-overlay ${open ? "show" : ""}`}
                onClick={onClose}
            />

            <aside className={`side-menu ${open ? "open" : ""}`}>

                <div className="menu-header">

                    <h2>ACTIVZONE25</h2>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Cerrar menú"
                    >
                        <FiX />
                    </button>

                </div>

                <nav>

                    <Link to="/" onClick={onClose}>
                        <FiHome />
                        <span>Inicio</span>
                    </Link>

                    <Link to="/adulto" onClick={onClose}>
                        <span>👕</span>
                        <span>Adulto</span>
                    </Link>

                    <Link to="/nino" onClick={onClose}>
                        <span>🧒</span>
                        <span>Niño</span>
                    </Link>

                    <Link to="/favoritos" onClick={onClose}>
                        <FiHeart />
                        <span>Favoritos</span>
                    </Link>

                    <a href="#seguimiento" onClick={onClose}>
                        <FiShoppingCart />
                        <span>Seguimiento pedido</span>
                    </a>

                    <a href="#contacto" onClick={onClose}>
                        <FiUser />
                        <span>Contacto</span>
                    </a>

                </nav>

            </aside>
        </>
    );
}

export default SideMenu;