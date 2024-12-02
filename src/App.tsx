import  NavBar  from './components/NavBar/NavBar'; 
import { Footer } from './components/Footer/Footer'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/root'

import './App.css';
import { ShoppingCartContext } from './provider/ShoppingCartContext';
import { useEffect, useState } from 'react';
import { getFromLocalStorage } from './utils/localStorage';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';



const PRODUCT_LIST_KEY = "PRODUCT_LIST_KEY";
const ppInitialOptions ={
  clientId: "test",
  currency: "MXN",
  intent: "capture",
};

function App() {
  const [productList, setProductList] = useState([]);

//obtiene el carrito de compras si existe en la bodega
  useEffect(() => {
    const result = getFromLocalStorage(PRODUCT_LIST_KEY);
    if (result) {
      setProductList(result);
    }
  }, []);

  return (
    <PayPalScriptProvider options={ppInitialOptions} >
          <ShoppingCartContext.Provider value={{
      productList,
      setProductList
    }}>
    <div className="app">
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </div>
    </ShoppingCartContext.Provider>
    </PayPalScriptProvider>
  );
}
export default App;
