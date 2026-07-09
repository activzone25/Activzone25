import "./ProductGrid.css";

import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";

function ProductGrid() {
  return (
    <section className="product-grid-section">

      <div className="section-header">
        <h2>🔥 Novedades</h2>
        <p>Descubre las últimas equipaciones disponibles.</p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
}

export default ProductGrid;