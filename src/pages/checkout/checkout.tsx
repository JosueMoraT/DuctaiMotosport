import { useForm } from 'react-hook-form';
import './checkout.styles.scss';

const Checkout = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data: any) => {
        console.log(data)
    }
    
    return <div className='checkout'>
        <h1>Finaliza tu compra</h1>
        <form className='checkout-form'>
            <h2>Datos de facturacion</h2>
            <label>Nombre Completo</label>
            <input type="texto" {...register("name")} />
            <label>Calle</label>
            <input type="texto" {...register("street")} />
            <label>Codigo Postal</label>
            <input type="texto" {...register("postalCode")} />
            <label>Colonia</label>
            <input type="texto" {...register("colony")} />
            <label>Municipio</label>
            <input type="texto" {...register("town")} />
            <label>Estado</label>
            <input type="texto" {...register("state")} />
            <label>Numero Telefonico</label>
            <input type="number" {...register("phoneNumber")} />
            <button type='submit'>Comprar Ahora</button>
        </form>
    </div>
}

export { Checkout };