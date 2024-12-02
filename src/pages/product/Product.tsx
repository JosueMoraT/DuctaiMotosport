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
import { FavoritesContext } from '../../provider/FavoritesContex';
import { catalogCUATRIMOTOS } from '../../data/catalogcuatrimotos';
import { catalogSUPERDEPORTIVAS } from '../../data/catalogsuperdeportivas';
import { catalogSUPERMOTARD } from '../../data/catalogsupermotard';
import Button from '../../components/Button/Button';


interface ProductFormProps {
    quantity:number;
}

const PRODUCT_LIST_KEY = "PRODUCT_LIST_KEY";
const FAVORITES_LIST_KEY = "FAVORITES_LIST_KEY";

const ProductPage = () => {
    const { productList, setProductList } = useContext(ShoppingCartContext);
    const { favoritesList, setFavoritesList } = useContext(FavoritesContext);
    const { register, handleSubmit } = useForm<ProductFormProps>();
    const params = useParams();
    const [ product, setProduct ] =useState<ProductCardProps>();
    const [relatedProducts, setRelatedProducts] = useState<ProductCardProps[]>([]);

    useEffect(() => {
        const combinedCatalogs = [
            ...catalogMOTOCROSS,
            ...catalogCUATRIMOTOS,
            ...catalogSUPERDEPORTIVAS,
            ...catalogSUPERMOTARD
        ];

        const result = combinedCatalogs.find((product) => product.id === params.productId);

        if (result) {
            setProduct(result);

            let currentCatalog: ProductCardProps[] = [];
            if(catalogMOTOCROSS.find(p => p.id === result.id)) {
                currentCatalog = catalogMOTOCROSS;
            } else if (catalogCUATRIMOTOS.find(p => p.id === result.id)) {
                currentCatalog = catalogCUATRIMOTOS;
            } else if (catalogSUPERDEPORTIVAS.find(p => p.id === result.id)) {
                currentCatalog = catalogSUPERDEPORTIVAS;
            } else if (catalogSUPERMOTARD.find(p => p.id === result.id)) {
                currentCatalog = catalogSUPERMOTARD;
            }

            setRelatedProducts(currentCatalog.filter(p => p.id !== result.id).slice(0, 3));
        }
    }, []); 

    useEffect (() => {
        if (productList && productList.length > 0) {
          setToLocalStorage(PRODUCT_LIST_KEY, productList);
        }
    }, [productList]);

    const findProduct = () => {
        // si lo encuentra regresa la posicion -1
        const result = productList.findIndex((productSearch: ProductCardProps) => 
            productSearch.id === product?.id
        );

        return result;
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
        toast.info("Producto añadido al carrito");
    };

    const addProductToFavorites = () => {
        if (!product) {
            toast.error("Producto no disponible para añadir a favoritos");
            return;
        }
    
        let isProductInFavorites = false;
        for (let i = 0; i < favoritesList.length; i++) {
            if (favoritesList[i].id === product.id) {
                isProductInFavorites = true;
                break;
            }
        }
    
        if (isProductInFavorites) {
            toast.warn("El producto ya está en favoritos");
            return;
        }
    
        const updatedFavorites = [...favoritesList, product];
        setFavoritesList(updatedFavorites);
        setToLocalStorage(FAVORITES_LIST_KEY, updatedFavorites);
        toast.info("Producto añadido a favoritos");
    };

    if (!product) {
        return <div>Este producto no existe, intenta mas tarde</div>
    }

    return <div className='product-page'>
        <div className='product-page-body'>
            <div className='product-page-carousel'>
                <EmblaCarousel slides={product?.imagesUrl}/>
            </div>
            <div className='product-page-detail-wrapper'>
                <div className='product-page-detail-title'>
                    {product.title}
                </div>
                <div className='product-page-detail-price-wrapper'>
                    <div className='product-page-detail-price'>
                        {product.price} MXN
                    </div>
                    <div className='product-page-detail-discount'>
                        {product.discount}%
                    </div>
                </div>
                <ReactStars
                    count={5}
                    size={16}
                    value={product.stars}
                    edit={false}
                />
                {product.description}
                <form className='product-page-form' onSubmit={handleSubmit(onSubmit)}>
                    <div className='product-page-form-quantity'>
                        <label>
                            Cantidad
                        </label>
                        <select className='select dark' {...register('quantity')}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                        </select>
                    </div>
                    <input type='submit' value="Agregar al carrito" className='dark' />
                    <Button type="button" onClick={addProductToFavorites} label="Añadir a favoritos" className="dark"
                    />
                </form>
            </div>
        </div>

        <div className="product-page-related">
                    <label className='product-page-related-title'>Productos relacionados:</label>
                    <Catalog productList={relatedProducts} />
                </div>

                <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} 
                closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover 
                className="custom-toast-container" toastClassName="custom-toast"/>


    </div>
};

export { ProductPage };