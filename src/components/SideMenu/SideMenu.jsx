import { Link } from "react-router-dom";

import {
    FiX,
    FiHome,
    FiUser,
    FiHeart,
    FiShoppingCart,
    FiMessageCircle,
    FiInfo
} from "react-icons/fi";

import "./SideMenu.css";

function SideMenu({

    open,
    setOpen,
    setCartOpen

}) {

    function closeMenu() {

        setOpen(false);

    }

    function openCart() {

        setOpen(false);

        setCartOpen(true);

    }

    return (

        <>

            <div

                className={`menu-overlay ${open ? "active" : ""}`}

                onClick={closeMenu}

            />



            <aside className={`side-menu ${open ? "active" : ""}`}>

                <div className="menu-header">

                    <h2>ACTIVZONE25</h2>

                    <button onClick={closeMenu}>

                        <FiX />

                    </button>

                </div>



                <nav className="menu-links">

                    <Link
                        to="/"
                        onClick={closeMenu}
                    >

                        <FiHome />

                        <span>Inicio</span>

                    </Link>



                    <Link
                        to="/adulto"
                        onClick={closeMenu}
                    >

                        <FiUser />

                        <span>Adulto</span>

                    </Link>



                    <Link
                        to="/nino"
                        onClick={closeMenu}
                    >

                        <FiUser />

                        <span>Niño</span>

                    </Link>



                    <Link
                        to="/favoritos"
                        onClick={closeMenu}
                    >

                        <FiHeart />

                        <span>Favoritos</span>

                    </Link>



                    <button
                        className="menu-cart"
                        onClick={openCart}
                    >

                        <FiShoppingCart />

                        <span>Carrito</span>

                    </button>



                    <Link
                        to="/contacto"
                        onClick={closeMenu}
                    >

                        <FiInfo />

                        <span>Contacto</span>

                    </Link>

                </nav>



                <div className="menu-social">

                    <a
                        href="https://wa.me/34647602998"
                        target="_blank"
                        rel="noreferrer"
                    >

                        <FiMessageCircle />

                        <span>WhatsApp</span>

                    </a>

                </div>



                <div className="menu-footer">

                    © 2026 ACTIVZONE25

                </div>

            </aside>

        </>

    );

}

export default SideMenu;