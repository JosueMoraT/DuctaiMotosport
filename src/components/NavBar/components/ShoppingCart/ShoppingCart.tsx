import { MdOutlineShoppingCart } from "react-icons/md";
import { IconLink } from "../../../IconLink/IconLink";
import { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../../../../provider/ShoppingCartContext";
import { ProductCardProps } from "../../../ProductCard/ProductCard";

const ShoppingCart = () => {
    const { productList } = useContext(ShoppingCartContext);
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        let sum = 0;
        productList.forEach((product: ProductCardProps) => {
            sum += Number(product.quantity);
        });
        setCount (sum); 
    }, [productList]);

    return <div>
        <IconLink href="/shopping-cart" 
        label={
            productList.length > 0 ?
            String(count) : 
            ''}>
            <MdOutlineShoppingCart />
        </IconLink>
    </div>
}

export { ShoppingCart };