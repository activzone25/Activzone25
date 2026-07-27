import { useState } from "react";

import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import Cart from "../components/Cart/Cart";
import SideMenu from "../components/SideMenu/SideMenu";

import "./Home.css";


function Home() {

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("Todas");

  const [cartOpen, setCartOpen] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);


  return (

    <>

      <Header

        search={search}

        setSearch={setSearch}

        setCartOpen={setCartOpen}

        setMenuOpen={setMenuOpen}

      />


      <main>


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


      <Cart

        open={cartOpen}

        setOpen={setCartOpen}

      />


      <SideMenu

        open={menuOpen}

        setOpen={setMenuOpen}

      />


    </>

  );

}


export default Home;