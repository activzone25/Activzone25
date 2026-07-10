function ProductGrid({ search, category = "Todas" }) {
  const text = search.toLowerCase();

  const filteredProducts = products.filter((product) => {
    const matchSearch =
      product.nombre.toLowerCase().includes(text) ||
      product.equipo.toLowerCase().includes(text) ||
      product.liga.toLowerCase().includes(text) ||
      product.temporada.toLowerCase().includes(text);

    const matchCategory =
      category === "Todas" || product.liga === category;

    return matchSearch && matchCategory;
  });

  return (
    <section className="product-grid-section">
      <div className="section-header">
        <h2>🔥 Novedades</h2>
        <p>Descubre las últimas equipaciones disponibles.</p>

        <span className="product-count">
          {filteredProducts.length} productos
        </span>
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