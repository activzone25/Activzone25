import "./ProductGrid.css";

import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";

function ProductGrid({ search }) {
  const filteredProducts = products.filter((product) => {
    const text = search.toLowerCase();

    return (
      product.nombre.toLowerCase().includes(text) ||
      product.equipo.toLowerCase().includes(text) ||
      product.liga.toLowerCase().includes(text) ||
      product.temporada.toLowerCase().includes(text)
    );
  });

  return (
    <section className="product-grid-section">
      <div className="section-header">
        <h2>🔥 Novedades</h2>
        <p>Descubre las últimas equipaciones disponibles.</p>
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <p>No se han encontrado productos.</p>
        )}
      </div>
    </section>
  );
}

export default ProductGrid;