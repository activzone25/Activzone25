import { useState } from "react";

import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import PriceFilter from "../components/PriceFilter/PriceFilter";
import ProductGrid from "../components/ProductGrid/ProductGrid";

import "./Home.css";

function Home({ search = "" }) {

    const [category, setCategory] = useState("Todas");
    const [maxPrice, setMaxPrice] = useState(40);

    return (

        <main>

            <Hero />

            <Categories
                category={category}
                setCategory={setCategory}
            />

            <PriceFilter
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
            />

            <section id="productos">

                <ProductGrid
                    search={search}
                    category={category}
                    maxPrice={maxPrice}
                />

            </section>

        </main>

    );

}

export default Home;