import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import "./FeaturedProducts.css";

function FeaturedProducts() {

  const destacados = products.slice(0, 8);

  return (

    <section className="featured">

      <div className="featured-title">

        <h2>🔥 Más vendidas</h2>

        <p>
          Descubre las camisetas más buscadas de la temporada 2026/27.
        </p>

      </div>

      <div className="featured-grid">

        {destacados.map(product => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </section>

  );

}

export default FeaturedProducts;