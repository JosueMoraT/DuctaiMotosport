import { Navigate, createBrowserRouter } from "react-router-dom";
import { MOTOCROSSPage } from "../pages/MOTOCROSS/MOTOCROSS";
import { Homepage } from "../pages/homepage/Homepage";
import { ProductPage } from "../pages/product/Product";
import { ShoppingCartPage } from "../pages/shopping-cart/ShoppingCart";
import { Checkout } from "../pages/checkout/checkout";
import { SUPERMOTARDPage } from "../pages/SUPERMOTARD/SUPERMOTARD";
import { CUATRIMOTOSPage } from "../pages/CUATRIMOTOS/CUATRIMOTOS";
import { SUPERDEPORTIVASPage } from "../pages/SUPERDEPORTIVAS/SUPERDEPORTIVAS";
import { FavoritesPage } from "../pages/Favorites/Favorites";


const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Homepage /> 
      ),
    },
    {
      path: "SUPERMOTARD",
      element: <SUPERMOTARDPage />
    },
    {
      path: "MOTOCROSS",
      element: <MOTOCROSSPage />
    },
    {
      path: "SUPERDEPORTIVAS",
      element: <SUPERDEPORTIVASPage />
    },
    {
      path: "CUATRIMOTOS",
      element: <CUATRIMOTOSPage />
    },
    {
      path:"product/:productId",
      element:<ProductPage />
    },
    {
      path: "shopping-cart",
      element: <ShoppingCartPage /> 
    },
    {
      path: "favorites",
      element: <FavoritesPage />
    },
    {
      path: "checkout",
      element: <Checkout />
    },
    {
        path: "*",
        element: (<Navigate to="/" replace={true}/>)
    }
  ]);

  export { router }
