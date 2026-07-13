import { Link } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiEye } from "react-icons/fi";
import { useCart } from "../../context/CartContext";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="product-card">

      <div className="product-image-container">

        {product.nuevo && (
          <span className="badge new">
            ⭐ NUEVO 26/27
          </span>
        )}

        <button className="favorite-btn">
          <FiHeart />
        </button>

        <img
          className="product-image"
          src={product.imagen}
          alt={product.nombre}
        />
      </div>

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
          <span>🚚 Envío 24/48h</span>
        </div>

        <div className="price">
          {product.precio} €
        </div>

        <div className="stock ok">
          ● En stock
        </div>

        <button
          className="add-btn"
          onClick={() => addToCart(product)}
        >
          <FiShoppingCart />
          Añadir al carrito
        </button>

        <Link
          to={`/producto/${product.slug}`}
          className="add-btn secondary"
        >
          <FiEye />
          Ver camiseta
        </Link>

      </div>

    </article>
  );
}

export default ProductCard;