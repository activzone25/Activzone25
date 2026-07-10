import { FiHeart, FiShoppingCart } from "react-icons/fi";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <article className="product-card">

      {/* Favoritos */}
      <button className="favorite-btn" aria-label="Favoritos">
        <FiHeart />
      </button>

      {/* Etiquetas */}
      {product.nuevo && (
        <span className="badge new">NUEVO</span>
      )}

      {product.oferta && (
        <span className="badge offer">OFERTA</span>
      )}

      {/* Imagen */}
      <div className="product-image-container">
        <img
          src={product.imagen}
          alt={product.nombre}
          className="product-image"
        />
      </div>

      {/* Información */}
      <div className="product-info">

        <h3>{product.nombre}</h3>

        <p className="season">
          {product.liga} • {product.temporada}
        </p>

        <div className="rating">
          ⭐⭐⭐⭐⭐
        </div>

        <div className="price">
          {product.precio} €
        </div>

        <button className="add-btn">
          <FiShoppingCart />
          Añadir al carrito
        </button>

      </div>

    </article>
  );
}

export default ProductCard;