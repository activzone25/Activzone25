import "./ProductGrid.css";

import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";

function ProductGrid({ search, category }) {

  const filteredProducts = products.filter((product) => {

    const text = search.toLowerCase();

    const matchSearch =
      product.nombre.toLowerCase().includes(text) ||
      product.equipo.toLowerCase().includes(text);

    const matchCategory =
      category === "Todas" ||
      product.liga === category;

    return matchSearch && matchCategory;
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