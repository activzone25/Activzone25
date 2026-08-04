import { useState } from "react";

import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import ProductGrid from "../components/ProductGrid/ProductGrid";

import "./Home.css";


function Home({search=""}){


const [category,setCategory]=useState("Todas");


return (

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


);


}


export default Home;