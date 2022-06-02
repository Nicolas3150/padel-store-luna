import React, { useContext, useState } from 'react'

import CartContext from '../../store/CartContext';
import ItemCount from '../ItemCount/ItemCount'
import { ToastAlert } from '../Alert/Alert';

import './ItemDetail.css'


const ItemDetail = ({ item }) => {
    const [clicked, setClicked] = useState(true);
    const { addProduct } = useContext(CartContext);

    const handleClick = () => {
        setClicked(!clicked);
    }

    const handleAdd = (quantityToAdd) => {
        addProduct({ quantity: quantityToAdd, ...item }) === -1 ?
            ToastAlert('error', `Error al agregar <b>${item.name}</b> al carrito`, 'Verifica que haya suficiente stock o ingrese una cantidad valida') :
            ToastAlert('success', `Se agrego <b>${item.name}</b> al carrito`, '')
    }

    let specs = Object.entries(item.specs);

    return (
        <>
            <div className='item'>
                <div className='img-container'>
                    <h2> {item.name}</h2>
                    <img src={item.img} alt="" />
                </div>
                <div className='detail-container'>
                    <h1> {item.name} </h1>
                    <p className='price'>Precio: ${item.price}</p>
                    <hr />
                    <p className='detail'>{item.description}</p>
                    <ItemCount stock={item.stock} onAdd={handleAdd} />
                    <span>Stock: {item.stock}</span>
                </div>
            </div>
            <div className={`item-specs ${clicked ? "active" : ""}`}>
                <div className={`specs-table`}>
                    {specs.map(spec =>
                        <div className='row' key={`row` + specs.indexOf(spec)}>
                            <div className='col-1'>{spec[0]}</div>
                            <div className='col-2'>{spec[1]}</div>
                        </div>
                    )}
                </div>
                <div className='specs-title' onClick={handleClick}>
                    <h3> Especificaciones </h3>
                </div>
            </div>
        </>
    )
}

export default ItemDetail