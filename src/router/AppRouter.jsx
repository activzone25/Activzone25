import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header/Header";

import Home from "../pages/Home";
import Adult from "../pages/Adult";
import Kids from "../pages/Kids";
import Product from "../pages/ProductPage/ProductPage";
import NotFound from "../pages/NotFound";


function AppRouter() {

  return (

    <BrowserRouter>

      {/* <Header /> */}


      <Route 
 path="/" 
 element={
   <h1 style={{color:"white"}}>
     HOME FUNCIONA
   </h1>
 }
/>


        <Route 
          path="/adulto" 
          element={<Adult />} 
        />


        <Route 
          path="/nino" 
          element={<Kids />} 
        />


        <Route 
          path="/producto/:slug" 
          element={<Product />} 
        />


        <Route 
          path="*" 
          element={<NotFound />} 
        />


      </Routes>


    </BrowserRouter>

  );

}


export default AppRouter;