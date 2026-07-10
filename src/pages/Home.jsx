import { useState } from "react";

import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import SearchBar from "../components/SearchBar/SearchBar";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import Footer from "../components/Footer/Footer";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todas");

  return (
    <>
      <Hero />

      <Categories
        category={category}
        setCategory={setCategory}
      />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <ProductGrid
        search={search}
        category={category}
      />

      <Footer />
    </>
  );
}

export default Home;