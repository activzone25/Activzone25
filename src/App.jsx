import { useState } from "react";

import AppRouter from "./router/AppRouter";

import Header from "./components/Header/Header";
import CartDrawer from "./components/CartDrawer/CartDrawer";
import SideMenu from "./components/SideMenu/SideMenu";


function App() {

    const [search, setSearch] = useState("");
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


            <AppRouter
                search={search}
            />


            <CartDrawer
                open={cartOpen}
                onClose={() =>
                    setCartOpen(false)
                }
            />


            <SideMenu
                open={menuOpen}
                onClose={() =>
                    setMenuOpen(false)
                }
            />

        </>

    );

}


export default App;