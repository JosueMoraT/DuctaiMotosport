import { FC } from "react";
import { ProductCard, ProductCardProps } from "../ProductCard/ProductCard";

import './Catalog.styles.scss';

interface CatalogProps {
    productList: ProductCardProps[];
};

const Catalog: FC<CatalogProps> = ({
    productList
}) => {
    return <div className="catalog">
        {
            productList && 
            productList.length > 0 ? 
            productList.map((product) =>
                <ProductCard {...product} />
            ) :
            <div>Lo sentimos,
                pero no se encontraron productos
            </div>
        }
    </div>;
};

export { Catalog };