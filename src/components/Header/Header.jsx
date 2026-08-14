import { Link } from "react-router-dom";

import {
    FiSearch,
    FiShoppingCart,
    FiMenu,
    FiHeart
} from "react-icons/fi";

import { useCart } from "../../context/CartContext";
import { useFavorites } from "../../context/FavoritesContext";

import "./Header.css";


function Header({
    search = "",
    setSearch = () => {},
    setCartOpen = () => {},
    setMenuOpen = () => {}
}) {

    const {
        totalProductos
    } = useCart();

    const {
        favorites
    } = useFavorites();


    return (

        <header className="header">

            <div className="header-container">

                {/* MENÚ MÓVIL */}

                <button
                    className="menu-mobile"
                    onClick={() => setMenuOpen(true)}
                    aria-label="Abrir menú"
                >
                    <FiMenu />
                </button>


                {/* LOGO */}

                <Link
                    to="/"
                    className="logo"
                >
                    ACTIVZONE25
                </Link>


                {/* BUSCADOR */}

                <div className="search-box">

                    <FiSearch
                        className="search-icon"
                    />

                    <input
                        type="text"
                        placeholder="Buscar camiseta..."
                        value={search}
                        onChange={e =>
                            setSearch(e.target.value)
                        }
                    />

                </div>


                {/* ACCIONES */}

                <div className="header-actions">


                    {/* FAVORITOS */}

                    <Link
                        to="/favoritos"
                        className="icon-btn"
                        aria-label="Favoritos"
                    >

                        <FiHeart />

                        {favorites.length > 0 && (

                            <span className="count">
                                {favorites.length}
                            </span>

                        )}

                    </Link>


                    {/* CARRITO */}

                    <button
                        className="icon-btn"
                        onClick={() =>
                            setCartOpen(true)
                        }
                        aria-label="Abrir carrito"
                    >

                        <FiShoppingCart />

                        {totalProductos > 0 && (

                            <span className="count">
                                {totalProductos}
                            </span>

                        )}

                    </button>


                    {/* MENÚ */}

                    <button
                        className="icon-btn menu-btn"
                        onClick={() =>
                            setMenuOpen(true)
                        }
                        aria-label="Abrir menú"
                    >
                        <FiMenu />
                    </button>

                </div>

            </div>

        </header>

    );

}


export default Header;