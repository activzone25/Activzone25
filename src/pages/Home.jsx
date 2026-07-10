import { useState } from "react";

import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import SearchBar from "../components/SearchBar/SearchBar";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";

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

      <Features />

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default Home;