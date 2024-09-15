import { Navigate, createBrowserRouter } from "react-router-dom";
import { MOTOCROSSPage } from "../pages/MOTOCROSS/MOTOCROSS";
import { Homepage } from "../pages/homepage/Homepage";
import { ProductPage } from "../pages/product/Product";
import { ShoppingCartPage } from "../pages/shopping-cart/ShoppingCart";
import { Checkout } from "../pages/checkout/checkout";


const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Homepage />
      ),
    },
    {
      path: "MOTOCROSS",
      element: <MOTOCROSSPage />
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
      path: "checkout",
      element: <Checkout />
    },
    {
        path: "*",
        element: (<Navigate to="/" replace={true}/>)
    }
  ]);

  export { router }
