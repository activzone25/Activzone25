import { useState } from "react";

import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import Cart from "../components/Cart/Cart";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todas");
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Header
        search={search}
        setSearch={setSearch}
        setCartOpen={setCartOpen}
      />

      <Hero />

      <Categories
        category={category}
        setCategory={setCategory}
      />

      <div id="productos">
        <ProductGrid
          search={search}
          category={category}
        />
      </div>

      <Cart
        open={cartOpen}
        setOpen={setCartOpen}
      />
    </>
  );
}

export default Home;