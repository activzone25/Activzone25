import { useState } from "react";

import AppRouter from "./router/AppRouter";

import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import SideMenu from "./components/SideMenu/SideMenu";


function App(){

    const [cartOpen,setCartOpen] = useState(false);

    const [menuOpen,setMenuOpen] = useState(false);

    const [search,setSearch] = useState("");


    return (

        <>

            <Header

                search={search}

                setSearch={setSearch}

                setCartOpen={setCartOpen}

                setMenuOpen={setMenuOpen}

            />


            <AppRouter

                search={search}

            />


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


export default App;