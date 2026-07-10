import { useState } from "react";

import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import SearchBar from "../components/SearchBar/SearchBar";
import ProductGrid from "../components/ProductGrid/ProductGrid";

function Home() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Hero />

      <Categories />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <ProductGrid search={search} />
    </>
  );
}

export default Home;