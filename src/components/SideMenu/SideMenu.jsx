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

                    <button onClick={onClose}>
                        <FiX />
                    </button>

                </div>

                <nav>

                    <Link to="/" onClick={onClose}>
                        <FiHome />
                        Inicio
                    </Link>

                    <Link to="/adulto" onClick={onClose}>
                        👕 Adulto
                    </Link>

                    <Link to="/nino" onClick={onClose}>
                        🧒 Niño
                    </Link>

                    <Link to="/favoritos" onClick={onClose}>
                        <FiHeart />
                        Favoritos
                    </Link>

                    <a href="#">
                        <FiShoppingCart />
                        Seguimiento pedido
                    </a>

                    <a href="#">
                        <FiUser />
                        Contacto
                    </a>

                </nav>

            </aside>

        </>

    );

}

export default SideMenu;