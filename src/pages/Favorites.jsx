import { Link } from "react-router-dom";

import ProductCard from "../components/ProductCard/ProductCard";
import { useFavorites } from "../context/FavoritesContext";

import "./Favorites.css";


function Favorites() {
    const {
        favorites,
        clearFavorites
    } = useFavorites();

    const favoriteCount = favorites.length;


    return (
        <main className="favorites-page">
            <header className="favorites-header">
                <span className="section-badge">
                    ❤️ FAVORITOS
                </span>

                <h1>Mis favoritos</h1>

                <p>
                    {favoriteCount}{" "}
                    {favoriteCount === 1
                        ? "camiseta guardada"
                        : "camisetas guardadas"
                    }
                </p>

                {favoriteCount > 0 && (
                    <button
                        type="button"
                        className="clear-favorites"
                        onClick={clearFavorites}
                    >
                        Vaciar favoritos
                    </button>
                )}
            </header>

            {favoriteCount > 0 ? (
                <section
                    className="favorites-grid"
                    aria-label="Productos favoritos"
                >
                    {favorites.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </section>
            ) : (
                <section className="favorites-empty">
                    <div
                        className="favorites-empty-icon"
                        aria-hidden="true"
                    >
                        ❤️
                    </div>

                    <h2>No tienes favoritos</h2>

                    <p>
                        Guarda tus camisetas favoritas para tenerlas
                        siempre a mano.
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