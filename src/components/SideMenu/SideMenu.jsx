import { Link } from "react-router-dom";

import {
    FiHeart,
    FiHome,
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
                aria-hidden="true"
            />

            <aside
                className={`side-menu ${open ? "open" : ""}`}
                aria-hidden={!open}
                aria-label="Menú de navegación"
            >
                <header className="menu-header">
                    <h2>ACTIVZONE25</h2>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Cerrar menú"
                    >
                        <FiX />
                    </button>
                </header>

                <nav aria-label="Navegación principal">
                    <Link to="/" onClick={onClose}>
                        <FiHome aria-hidden="true" />
                        <span>Inicio</span>
                    </Link>

                    <Link to="/adulto" onClick={onClose}>
                        <span aria-hidden="true">👕</span>
                        <span>Adulto</span>
                    </Link>

                    <Link to="/nino" onClick={onClose}>
                        <span aria-hidden="true">🧒</span>
                        <span>Niño</span>
                    </Link>

                    <Link to="/favoritos" onClick={onClose}>
                        <FiHeart aria-hidden="true" />
                        <span>Favoritos</span>
                    </Link>

                    <a href="#seguimiento" onClick={onClose}>
                        <FiShoppingCart aria-hidden="true" />
                        <span>Seguimiento pedido</span>
                    </a>

                    <a href="#contacto" onClick={onClose}>
                        <FiUser aria-hidden="true" />
                        <span>Contacto</span>
                    </a>
                </nav>
            </aside>
        </>
    );
}


export default SideMenu;