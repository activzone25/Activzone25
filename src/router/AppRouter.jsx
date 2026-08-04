import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";


import Home from "../pages/Home";
import Adult from "../pages/Adult";
import Kids from "../pages/Kids";
import ProductPage from "../pages/ProductPage/ProductPage";
import Favorites from "../pages/Favorites";
import NotFound from "../pages/NotFound";


function AppRouter(){


return (

<BrowserRouter>

<Routes>


<Route path="/" element={<Home/>}/>


<Route path="/adulto" element={<Adult/>}/>


<Route path="/nino" element={<Kids/>}/>


<Route 
path="/producto/:slug"
element={<ProductPage/>}
/>


<Route
path="/favoritos"
element={<Favorites/>}
/>


<Route
path="*"
element={<NotFound/>}
/>


</Routes>

</BrowserRouter>

);

}


export default AppRouter;