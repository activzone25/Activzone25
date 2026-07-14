import { useState } from "react";

import Hero from "../components/Hero/Hero";
import PromoBar from "../components/PromoBar/PromoBar";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import LeagueSection from "../components/LeagueSection/LeagueSection";
import SearchBar from "../components/SearchBar/SearchBar";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import Footer from "../components/Footer/Footer";


function Home() {

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("Todas");


  return (

    <>

      <Hero />

      <PromoBar />

      <FeaturedProducts />

      <LeagueSection />


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