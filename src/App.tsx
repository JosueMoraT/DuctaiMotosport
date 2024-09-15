import  NavBar  from './components/NavBar/NavBar'; 
import { Footer } from './components/Footer/Footer'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/root'

import './App.css';
import { ShoppingCartContext } from './provider/ShoppingCartContext';
import { useEffect, useState } from 'react';
import { getFromLocalStorage } from './utils/localStorage';



const heroProps = {
  imageUrl: 'https://images.ctfassets.net/x7j9qwvpvr5s/RmQXF9JOHHJbMkcPaeVcS/451cdb4458608fadf9c4eac9f93f003e/Model-Menu-MY24-Streetfighter-V4-Supreme.png',
  imageText: 'ducati-back',
  headline: 'Ducati Streetfighter V4 Supreme Una edición especial limitada y numerada nacida de una nueva colaboración exclusiva',
  button: {
    href: '/SUPERDEPORTIVAS',
    label: 'COMPRAR AHORA'
  }
};

const PRODUCT_LIST_KEY = "PRODUCT_LIST_KEY";

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
  );
}
export default App;
