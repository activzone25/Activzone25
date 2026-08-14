import { useState } from "react";

import CartDrawer from "./components/CartDrawer/CartDrawer";
import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu/SideMenu";
import AppRouter from "./router/AppRouter";


function App() {
    const [search, setSearch] = useState("");
    const [cartOpen, setCartOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);


    function openCart() {
        setMenuOpen(false);
        setCartOpen(true);
    }


    function openMenu() {
        setCartOpen(false);
        setMenuOpen(true);
    }


    return (
        <>
            <Header
                search={search}
                setSearch={setSearch}
                setCartOpen={openCart}
                setMenuOpen={openMenu}
            />

            <AppRouter search={search} />

            <CartDrawer
                open={cartOpen}
                onClose={() => setCartOpen(false)}
            />

            <SideMenu
                open={menuOpen}
                onClose={() => setMenuOpen(false)}
            />
        </>
    );
}


export default App;