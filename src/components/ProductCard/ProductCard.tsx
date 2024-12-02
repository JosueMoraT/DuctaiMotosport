import { FC } from "react";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { MdAddShoppingCart } from "react-icons/md";
import ReactStars from 'react-stars'

import './ProductCard.styles.scss';

export interface ProductCardProps {
    id: string;
    imagesUrl: string[];
    description: string;
    price: number;
    stars?:number;
    discount?:number;
    title: string;
    quantity?: number;
}

const ProductCard: FC<ProductCardProps> = ({
    title,
    imagesUrl,
    description,
    price,
    stars,
    discount,
    id 
}) => {
    return <a className="product-card" 
        href={`product/${id}`}>
        <div className="product-card-title">
        {title}
        </div>
        <img className="product-card-img" 
        src={imagesUrl[0]} 
        alt="" />
        <label> {description} </label>
        <ReactStars
            count={5}
            size={18}
            value={stars}
            edit={false}
        />
        <div className="product-card-footer">
            <p>
                <label className="product-card-price">$MXN {price}</label>
                <label className="product-card-discount">-{discount}%</label>
            </p>    
            <ButtonLink href="" label="Shop" className="dark" iconAfter={() => <MdAddShoppingCart />}/>
        </div>
    </a>
}

export { ProductCard }
