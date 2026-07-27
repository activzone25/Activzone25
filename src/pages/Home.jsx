import { useState } from "react";

import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import Cart from "../components/Cart/Cart";
import SideMenu from "../components/SideMenu/SideMenu";
import Toast from "../components/Toast/Toast";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todas");

  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [toastOpen, setToastOpen] = useState(false);
  const [toastProduct, setToastProduct] = useState(null);

  return (
    <>
      <Header
        search={search}
        setSearch={setSearch}
        setCartOpen={setCartOpen}
        setMenuOpen={setMenuOpen}
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

      <SideMenu
        open={menuOpen}
        setOpen={setMenuOpen}
      />

      <Toast
        open={toastOpen}
        product={toastProduct}
      />
    </>
  );
}

export default Home;