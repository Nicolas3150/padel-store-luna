import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import CartContext from '../../store/CartContext'
import './ItemCart.css'

const ItemCart = ({ item }) => {
    const cartCtx = useContext(CartContext);

    return (
        <div className='itemCartContainer'>
            <div className='itemImg'>
                <img src={item?.img} alt="" />
                <div className='itemName'>
                    <Link to={'/item/' + item?.id}>{item?.name}</Link>
                    <button onClick={() => cartCtx.removeItem(item.id)}>Remover producto</button>
                </div>
            </div>
            <div className='priceAndMount'>
                <p className='item-price'>${item?.price}</p>
                <input value={item?.quantity} readOnly />
                <p className='item-priceTotal'>${cartCtx.getTotalUnit(item)}</p>
            </div>
        </div>
    )
}

export default ItemCart