import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { useCart } from "../../context/CartContext";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { addToCart } = useCart();

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

        <div className="extras">
          <span>🏆 Parches GRATIS</span>

          {product.personalizable && (
            <span>✍️ Personalizable (+5 €)</span>
          )}
        </div>

        <div className="price">
          {product.precio} €
        </div>

        <p className={`stock ${product.disponible ? "ok" : "no"}`}>
          {product.disponible ? "🟢 Disponible" : "🔴 Agotado"}
        </p>

        <button
          className="add-btn"
          disabled={!product.disponible}
          onClick={() => addToCart(product)}
        >
          <FiShoppingCart />
          Añadir al carrito
        </button>

      </div>

    </article>
  );
}

export default ProductCard;