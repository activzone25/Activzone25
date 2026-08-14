import ProductGrid from "../components/ProductGrid/ProductGrid";

import "./Adult.css";


function Adult() {
    return (
        <main className="category-page">
            <section
                className="category-header"
                aria-labelledby="adult-title"
            >
                <span className="section-badge">
                    ⭐ COLECCIÓN ADULTO · 2026/27
                </span>

                <h1 id="adult-title">
                    Camisetas Adulto
                </h1>

                <p>
                    Equipaciones de fútbol para adulto de la
                    temporada 2026/27.
                </p>
            </section>

            <ProductGrid category="Adulto" />
        </main>
    );
}


export default Adult;