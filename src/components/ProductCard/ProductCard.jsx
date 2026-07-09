import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <article className="product-card">

      {product.nuevo && (
        <span className="badge new">NUEVO</span>
      )}

      {product.oferta && (
        <span className="badge offer">OFERTA</span>
      )}

      <img
        src={product.imagen}
        alt={product.nombre}
        className="product-image"
      />

      <div className="product-info">

        <h3>{product.nombre}</h3>

        <p>{product.temporada}</p>

        <div className="price">
          {product.precio} €
        </div>

        <button className="add-btn">
          Añadir al carrito
        </button>

      </div>

    </article>
  );
}

export default ProductCard;