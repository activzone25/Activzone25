import ProductGrid from "../components/ProductGrid/ProductGrid";

import "./Kids.css";


function Kids(){

    return (

        <main className="category-page">


            <section className="category-header">


                <span className="section-badge">
                    ⭐ COLECCIÓN NIÑO 2026/27
                </span>


                <h1>
                    🧒 Camisetas Niño
                </h1>


                <p>
                    Equipaciones infantiles 2026/27.
                </p>


            </section>



            <ProductGrid

                category="Niño"

            />


        </main>

    );

}


export default Kids;