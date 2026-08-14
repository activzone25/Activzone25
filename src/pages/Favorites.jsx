import { Link } from "react-router-dom";

import ProductCard from "../components/ProductCard/ProductCard";
import { useFavorites } from "../context/FavoritesContext";

import "./Favorites.css";


function Favorites() {

    const {
        favorites,
        clearFavorites
    } = useFavorites();


    const totalFavoritos = favorites.length;


    return (

        <main className="favorites-page">

            {/* ==========================================
                CABECERA
            ========================================== */}

            <section className="favorites-header">

                <span className="section-badge">
                    ❤️ FAVORITOS
                </span>

                <h1>
                    Mis favoritos
                </h1>

                <p>
                    {totalFavoritos}{" "}
                    {totalFavoritos === 1
                        ? "camiseta guardada"
                        : "camisetas guardadas"
                    }
                </p>


                {totalFavoritos > 0 && (

                    <button
                        type="button"
                        className="clear-favorites"
                        onClick={clearFavorites}
                    >
                        Vaciar favoritos
                    </button>

                )}

            </section>


            {/* ==========================================
                FAVORITOS
            ========================================== */}

            {totalFavoritos > 0 ? (

                <section className="favorites-grid">

                    {favorites.map(product => (

                        <ProductCard
                            key={product.id}
                            product={product}
                        />

                    ))}

                </section>

            ) : (

                /* ======================================
                   FAVORITOS VACÍOS
                ====================================== */

                <section className="favorites-empty">

                    <div className="favorites-empty-icon">
                        ❤️
                    </div>

                    <h2>
                        No tienes favoritos
                    </h2>

                    <p>
                        Guarda tus camisetas favoritas
                        para tenerlas siempre a mano.
                    </p>

                    <Link
                        to="/"
                        className="back-shop"
                    >
                        Ver catálogo
                    </Link>

                </section>

            )}

        </main>

    );

}


export default Favorites;