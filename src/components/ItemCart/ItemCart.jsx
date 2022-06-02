import React, { useContext } from 'react'

import { Link } from 'react-router-dom';

import CartContext from '../../store/CartContext'
import { ToastAlert } from '../Alert/Alert' 

import './ItemCart.css'

const ItemCart = ({ item }) => {
    const { removeItem, getTotalUnit } = useContext(CartContext);

    const handleRemove = () => {
        removeItem(item.id);
        ToastAlert('info', `Se ha eliminado una unidad de ${ item.name }`, '');
    }

    return (
        <div className='itemCartContainer'>
            <div className='itemImg'>
                <img src={item.img} alt="" />
                <div className='itemName'>
                    <Link to={'/item/' + item.id}>{item.name}</Link>
                    <button onClick={ handleRemove }>Remover producto</button>
                </div>
            </div>
            <div className='priceAndMount'>
                <p className='item-price'>${item.price}</p>
                <input value={item.quantity} readOnly />
                <p className='item-priceTotal'>${getTotalUnit(item)}</p>
            </div>
        </div>
    )
}

export default ItemCart