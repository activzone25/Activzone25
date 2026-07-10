import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header/Header";

import Home from "../pages/Home";
import Adult from "../pages/Adult";
import Kids from "../pages/Kids";
import Product from "../pages/Product";
import NotFound from "../pages/NotFound";

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/adulto" element={<Adult />} />

        <Route path="/nino" element={<Kids />} />

        <Route path="/producto/:slug" element={<Product />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;