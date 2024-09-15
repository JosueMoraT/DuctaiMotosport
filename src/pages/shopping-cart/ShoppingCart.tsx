import { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../../provider/ShoppingCartContext";
import { ProductCardProps } from "../../components/ProductCard/ProductCard";

import './ShoppingCard.styles.scss';
import { setToLocalStorage } from "../../utils/localStorage";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";

const PRODUCT_LIST_KEY = "PRODUCT_LIST_KEY";

const ShoppingCartPage = () => {
    const { productList, setProductList } = useContext(ShoppingCartContext);
    const [ total, setTotal ] = useState(0);

    useEffect (() => {
        let totalGlobal = 0;
        //useEffects va a estar escuchando cuando las propiedades en el array cambien 
        productList.forEach((product: ProductCardProps) => { //leemos cada producto de la lista
            //calcular el total del producto
            const totalByProduct = product.quantity! * product.price;

            //El total por producto lo suma al total general
            totalGlobal = totalGlobal + totalByProduct;
        });
        setTotal(totalGlobal);
    }, [productList]);

    const handleClick = (id:string) => { //id seleccionado
        //cuando el usuario haga click, se ejecuta esta funcion
        // usamos filter, porque queremos eliminar un elemento de la lista 
        const result = productList.filter((product: ProductCardProps) => {
            return product.id !== id //regresamos todos los productos cuando cuplan esta condicion 
        });
        setProductList(result);
        setToLocalStorage(PRODUCT_LIST_KEY, result);
    };

    const findProduct = (id: string) => {
        // si lo encuentra regresa la psicion -1
        const result = productList.findIndex((productSearch: ProductCardProps) => 
            productSearch.id === id
        );
        return result
    }

    const handleOnQuantityChange = (event: React.ChangeEvent<HTMLInputElement>, id:string) => {
        const productIndex = findProduct(id);
        productList[productIndex].quantity = Number(event.target.value); 

        setProductList([...productList]);

        setToLocalStorage(PRODUCT_LIST_KEY, [...productList]);
    }

    return <div className="shopping-cart-page">
        <h1>Carrito</h1>
        <div className="shopping-cart-page-list">
        {
            productList.map((product : ProductCardProps) => {
                return <div className="shopping-cart-page-product">
                    <div className="shopping-cart-page-product-image">
                        <img src={product.imagesUrl[0]} alt=""/>
                    </div>
                    <div className="shopping-cart-page-product-description">
                        <div>{product.description}</div>
                        <div>
                            CANTIDAD:
                                <input 
                                    type="number" 
                                    defaultValue={product.quantity}
                                    onChange={(e) => {handleOnQuantityChange(e, product.id)}} />
                        </div>
                        <button onClick={() => handleClick(product.id)}>Eliminar</button>
                    </div>
                    <div className="shopping-cart-page-product-price">
                        {product.price}
                    </div>
                    <div className="shopping-cart-page-product-total">
                        ${product.quantity! * product.price}
                    </div>
                    {product.description}
                </div>
            })
            }
            <div> 
                <label>Total: ${total}</label>
                <ButtonLink href="checkout" label="Proceder al pago" className="dark"/>
            </div>
        </div>
    </div>
};

export { ShoppingCartPage };
