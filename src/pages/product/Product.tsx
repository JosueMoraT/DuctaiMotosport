import { useParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Product.styles.scss';

import EmblaCarousel from '../../components/EmblaCarousel/EmblaCarousel';
import { useContext, useEffect, useState } from 'react';
import { catalogMOTOCROSS } from '../../data/catalog';
import { ProductCardProps } from '../../components/ProductCard/ProductCard';
import ReactStars from 'react-stars';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Catalog } from '../../components/Catalog/Catalog';
import { ShoppingCartContext } from '../../provider/ShoppingCartContext';
import { setToLocalStorage } from '../../utils/localStorage';

interface ProductFormProps {
    quantity:number;
}

const PRODUCT_LIST_KEY = "PRODUCT_LIST_KEY";

const ProductPage = () => {
    const { productList, setProductList } = useContext(ShoppingCartContext);
    const { register, handleSubmit } = useForm<ProductFormProps>();
    const params = useParams();
    const [ product, setProduct ] =useState<ProductCardProps>();

    useEffect(() => {
        const result = catalogMOTOCROSS.find((product) => {
            return product.id === params.productId
        }); 
        if (result) {
            setProduct(result);
        }
    }, []);

    useEffect (() => {
        if (productList && productList.length > 0)
        setToLocalStorage(PRODUCT_LIST_KEY, productList);
    }, [productList]);

    const findProduct = () => {
        // si lo encuentra regresa la psicion -1
        const result = productList.findIndex((productSearch: ProductCardProps) => 
            productSearch.id === product?.id
        );

        return result!!;
    }

    const onSubmit: SubmitHandler<ProductFormProps> = (data) => {
        const productIndex = findProduct();
        if (productIndex === -1) { //cuando no existe, lo anade a la lista
            setProductList(
                [
                    ...productList,
                    { 
                        ...product,
                        quantity: Number(data.quantity)
                    }
                ]
            );
        }else { //cuando existe solo modificalo  
            productList[productIndex].quantity = Number(productList[productIndex].quantity) + Number(data.quantity);
            setProductList([...productList]);
        }
        toast("Producto añadido al carrito");
    };

    if (!product) {
        return <div>Este producto no existe, intenta mas tarde</div>
    }

    return <div className='product-page'>
        <div className='product-page-body'>
            <div className='product-page-carousel'>
                <EmblaCarousel slides={product?.imagesUrl} /> :
            </div>
            <div className='product-page-detail-wrapper'>
                <div className='product-page-detail-title'>{product.title}</div>
                <div className='product-page-detail-price'>{product.price}</div>
                <div className='product-page-detail-discount'>{product.discount}</div>
                <ReactStars
                    count={5}
                    size={16}
                    value={product.stars}
                    edit={false}
                />
                {product.description}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        Cantidad  
                        <select {...register('quantity')}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                        </select>
                        <input type='submit' value="Agregar al carrito" />
                    </label>
                </form>
            </div>
        </div>
        <label>Productos Relacionados:</label>
        <Catalog productList={catalogMOTOCROSS.slice(0, 3)}/>
        <ToastContainer 
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="dark"
        />
    </div>
};

export { ProductPage };