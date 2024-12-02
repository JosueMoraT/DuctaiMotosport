import { useForm } from 'react-hook-form';
import './checkout.styles.scss';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { ToastContainer, toast } from 'react-toastify';
import { useContext, useState } from 'react';
import Modal from 'react-modal'; 
import moment from 'moment';
import { ShoppingCartContext } from '../../provider/ShoppingCartContext';
import { ProductCardProps } from '../../components/ProductCard/ProductCard';

const Checkout = () => {
    const { productList } = useContext(ShoppingCartContext);
    const { register, handleSubmit } = useForm();
    const [ payActive, setPayActive ] = useState(false);
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ data, setData ] = useState({} as any);
    const [ ticket, setTicket ] = useState();

    const onSubmit = async (dataForm: any) => {
        setData(dataForm);
        setPayActive(true);
    }

    const createOrder = (data: any, actions: any) => {
        return actions.order.create({
            purchase_units: [{
                description: 'Moto YZ125',
                amount: {
                    currency_code: "MXN",
                    value: 0.1,
                }
            }]
        }).then((orderId: any) => {
            setModalOpen(true);
            setTicket(orderId)
            return orderId;
        });
    };

    const onError = (data: any) => {
        toast.error("Error con tu metodo de pago");
    };

    
    return <div className='checkout'>
        <h1>Finaliza tu compra</h1>
        <form className='checkout-form' onSubmit={handleSubmit(onSubmit)}>
            <h2>Datos de facturacion</h2>
            <label>Nombre Completo</label>
            <input type="texto" {...register("name")} />
            <label>Calle</label>
            <input type="texto" {...register("street")} />
            <label>Codigo Postal</label>
            <input type="texto" {...register("postalCode")}  />
            <label>Colonia</label>
            <input type="texto" {...register("colony")}/>
            <label>Municipio</label>
            <input type="texto" {...register("town")} />
            <label>Estado</label>
            <input type="texto" {...register("state")}  />
            <label>Numero Telefonico</label>
            <input type="number" {...register("phoneNumber")}  />
            {
                payActive ?
                    <PayPalButtons 
                        createOrder={createOrder}
                        onError={onError}
                        className='paypal'
                    /> :
                    <input type='submit' value="Comprar ahora"/>
            }
        </form>
        <Modal isOpen={modalOpen}>
            <div className='checkout-modal'>
                <h2>compra exitosa</h2>
                <h3>Fecha: {moment().format('MMMM Do YYYY, h:mm:ss a')}</h3>
                <h3>Numero de ticket: {ticket}</h3>
                <h3>Datos de compra</h3>
                <label>Nombe:{data.name}</label>
                <label>Calle:{data.street}</label>
                <label>Codigo Postal:{data.postalCode}</label>
                <label>Colonia:{data.colony}</label>
                <label>Municipio:{data.town}</label>
                <label>Estado:{data.state}</label>
                <label>Numero Telefonico:{data.phoneNumber}</label>
                {
                    productList.map((product: ProductCardProps) => {
                        return <div className='checkout-modal-product'>
                        <div className='checkout-modal-product-image'>
                            <img src={product.imagesUrl[0]} alt=''/>
                        </div>
                            <label>Descripcion: {product.description}</label>
                            <label>Cantida {product.quantity}</label>
                            <label>Precio ${product.quantity! * product.price}</label>
                        </div>
                    })
                }
            </div>
        </Modal>
        <ToastContainer />
    </div>
}

export { Checkout };

function setTicket(orderId: any) {
    throw new Error('Function not implemented.');
}
