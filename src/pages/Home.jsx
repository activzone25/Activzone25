import { useState } from "react";

import Categories from "../components/Categories/Categories";
import Hero from "../components/Hero/Hero";
import ProductGrid from "../components/ProductGrid/ProductGrid";

import "./Home.css";


function Home({ search = "" }) {
    const [category, setCategory] = useState("Todas");


    return (
        <main className="home-page">
            <Hero />

            <Categories
                category={category}
                setCategory={setCategory}
            />

            <section id="productos">
                <ProductGrid
                    search={search}
                    category={category}
                />
            </section>
        </main>
    );
}


export default Home;