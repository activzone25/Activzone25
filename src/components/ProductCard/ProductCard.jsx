import { Link } from "react-router-dom";
import {
  FiHeart,
  FiShoppingCart,
  FiEye
} from "react-icons/fi";

import { useCart } from "../../context/CartContext";
import { useFavorites } from "../../context/FavoritesContext";

import laliga from "../../assets/parches/laliga.png";
import champions from "../../assets/parches/champions.png";

import "./ProductCard.css";

function ProductCard({ product }) {

  const { addToCart } = useCart();

  const {
    toggleFavorite,
    isFavorite
  } = useFavorites();

  const patches = {
    laliga,
    champions
  };

  function addProduct() {

    addToCart({

      ...product,

      imagen: product.front,

      cantidad: 1

    });

  }

  return (

    <article className="product-card">

      {product.nuevo && (

        <span className="badge new">
          ⭐ NUEVO 26/27
        </span>

      )}

      {/* FAVORITOS */}

      <button
        className={`favorite-btn ${
          isFavorite(product.id) ? "active" : ""
        }`}
        onClick={() => toggleFavorite(product)}
      >

        <FiHeart />

      </button>

      {/* IMAGEN */}

      <div className="product-image-container">

        <img
          className="product-image"
          src={product.front}
          alt={product.nombre}
        />

      </div>

      {/* INFORMACIÓN */}

      <div className="product-info">

        <h3>{product.nombre}</h3>

        <p className="season">
          Temporada {product.temporada}
        </p>

        <div className="rating">
          ⭐⭐⭐⭐⭐
        </div>

        <div className="extras">

          <span>✅ Personalización disponible</span>

          <span>🏆 Parches GRATIS</span>

        </div>

        <div className="patch-container">

          {product.parches?.map((patch) => (

            <img
              key={patch}
              src={patches[patch]}
              alt={patch}
            />

          ))}

        </div>

        <div className="price">

          {product.precio} €

        </div>

        <div className="stock ok">

          ● En stock

        </div>

        <div className="product-buttons">

          <button
            className="add-btn"
            onClick={addProduct}
          >

            <FiShoppingCart />

            Añadir

          </button>

          <Link
            to={`/producto/${product.slug}`}
            className="view-btn"
          >

            <FiEye />

            Ver

          </Link>

        </div>

      </div>

    </article>

  );

}

export default ProductCard;