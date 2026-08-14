import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";

import "./ProductGrid.css";


function ProductGrid({
    search = "",
    category = "Todas"
}) {
    const searchText = search.toLowerCase().trim();

    const filteredProducts = products
        .filter((product) => {
            const name = product.nombre?.toLowerCase() || "";
            const team = product.equipo?.toLowerCase() || "";
            const league = product.liga?.toLowerCase() || "";

            const matchesSearch =
                !searchText ||
                name.includes(searchText) ||
                team.includes(searchText) ||
                league.includes(searchText);

            const matchesCategory =
                category === "Todas" ||
                product.liga === category ||
                product.categoria === category;

            return (
                product.disponible !== false &&
                matchesSearch &&
                matchesCategory
            );
        })
        .sort((firstProduct, secondProduct) => {
            if (
                Number(firstProduct.nuevo) !==
                Number(secondProduct.nuevo)
            ) {
                return (
                    Number(secondProduct.nuevo) -
                    Number(firstProduct.nuevo)
                );
            }

            if (
                Number(firstProduct.rating || 0) !==
                Number(secondProduct.rating || 0)
            ) {
                return (
                    Number(secondProduct.rating || 0) -
                    Number(firstProduct.rating || 0)
                );
            }

            return (firstProduct.nombre || "").localeCompare(
                secondProduct.nombre || ""
            );
        });

    const productCount = filteredProducts.length;
    const counterText =
        productCount === 1 ? "PRODUCTO" : "PRODUCTOS";


    return (
        <section
            className="product-grid-section"
            aria-label="Catálogo de productos"
        >
            <header className="catalog-header">
                <div className="catalog-heading">
                    <span className="catalog-eyebrow">
                        ACTIVZONE25

                        <span
                            className="eyebrow-separator"
                            aria-hidden="true"
                        >
                            /
                        </span>

                        COLECCIÓN 26/27
                    </span>

                    <h2>
                        Las nuevas
                        <br />
                        <span>equipaciones</span>
                    </h2>

                    <p>
                        Descubre las nuevas camisetas de fútbol de la
                        temporada 2026/27.
                    </p>
                </div>

                <div
                    className="catalog-counter"
                    aria-label={`${productCount} ${counterText.toLowerCase()}`}
                >
                    <strong>{productCount}</strong>
                    <span>{counterText}</span>
                </div>
            </header>

            <div
                className="catalog-line"
                aria-hidden="true"
            />

            {productCount > 0 ? (
                <div
                    className="product-grid"
                    aria-live="polite"
                >
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            ) : (
                <div
                    className="empty-products"
                    role="status"
                >
                    <div
                        className="empty-products-icon"
                        aria-hidden="true"
                    >
                        ×
                    </div>

                    <span className="empty-eyebrow">
                        CATÁLOGO
                    </span>

                    <h3>No encontramos productos</h3>

                    <p>
                        Prueba con otra búsqueda o selecciona una
                        categoría diferente.
                    </p>
                </div>
            )}
        </section>
    );
}


export default ProductGrid;