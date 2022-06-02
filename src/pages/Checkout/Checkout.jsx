import React, { useContext, useState } from 'react'

import { db } from '../../services/firebase';
import { addDoc, collection } from 'firebase/firestore';

import CartContext from '../../store/CartContext';
import Loading from '../../components/Loading/Loading'
import { AlertSuccess, errorAlert } from '../../components/Alert/Alert';

import { Link } from 'react-router-dom';

import './Checkout.css'

const Checkout = () => {
    const regName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    const regEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    const regPhone = /^[?[(]?[0-9]{3,4}[)]?[-\s?[0-9]{2,3}[-\s]?[0-9]{4,6}$/im;

    const [loading, setLoading] = useState(false);
    const { products, getTotal, clear } = useContext(CartContext);
    const [orderId, setOrderId] = useState();
    const [buyer, setBuyer] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const { name, email, phone } = buyer;

    const handleInputChange = (e) => {
        setBuyer({ ...buyer, [e.target.name]: e.target.value });
    }

    const generateOrder = async (data) => {
        setLoading(true);
        try {
            const col = collection(db, "orders");
            const order = await addDoc(col, data);
            setOrderId(order.id);
            clear(false);
            setLoading(false);

        } catch (err) {
            errorAlert('No se pudo realizar la orden. Por favor intetenlo nuevamente.');
            console.log(err);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const date = new Date();
        const items = products.map(i => {
            return {
                id: i.id,
                name: i.name,
                price: i.price,
                quantity: i.quantity
            }
        });
        const total = getTotal();
        if (validate(buyer.name, regName) && validate(buyer.email, regEmail) && validate(buyer.phone, regPhone)) {
            const data = { buyer, items, date, total };
            generateOrder(data);
        } else {
            console.log("Error en formulario");
        }
    }

    const validate = (value, regx) => {
        return (regx.test(value) || value.length === 0);
    }
    return (
        <div className='checkoutContainer'>
            {loading ? <Loading /> : products.length ? (<>
                <h1>Finalizando compra</h1>
                <hr />
                <div className='checkout'>
                    <div className='formulario'>
                        <h3>Completar datos</h3>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre"
                                value={name}
                                onChange={handleInputChange}
                                required
                            />
                            {validate(buyer.name, regName) ? '' : <span>El nombre solo debe contener letras</span>}
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={handleInputChange}
                                required
                            />
                            {validate(buyer.email, regEmail) ? '' : <span>Ingrese un mail valido <br /> Ejemplo: padelstore@example.com</span>}
                            <input
                                type="number"
                                name="phone"
                                placeholder="Telefono"
                                value={phone}
                                onChange={handleInputChange}
                                required
                            />
                            {validate(buyer.phone, regPhone) ? '' : <span>Ingrese un telefono valido <br />En lo posible solo utilice numeros, sin espacios ni guiones</span>}
                            <input
                                type="submit"
                                value="Finalizar Compra"
                                className="btn"
                            />
                        </form>
                    </div>
                    <div className='checkoutCart'>
                        <h3>Carrito</h3>
                        {products.map((p) =>
                            <div className='itemInCart' key={p.id}>
                                <img src={p.img} alt="" />
                                <div className='infoItem'>
                                    <p>{p.name}</p>
                                    <span>Cantidad: {p.quantity}</span>
                                </div>
                            </div>)}
                    </div>
                </div>
            </>
            ) : <>
                {orderId ? AlertSuccess(orderId) : null}
                <div className='noItems'>
                    <h2 className='no-items'>No hay items en el carrito</h2>
                    <Link to={'/'}>
                        <button className='btn-delete'>Ir al inicio...</button>
                    </Link>

                </div>
            </>
            }
        </div>

    )
}

export default Checkout