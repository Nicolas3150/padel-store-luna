import React, { useContext } from 'react'

import CartContext from '../../store/CartContext'
import ItemCart from '../../components/ItemCart/ItemCart'
import { ToastAlert } from '../../components/Alert/Alert'

import { Link } from 'react-router-dom'

import './Cart.css'

const Cart = () => {
  const { products, getTotal, clear } = useContext(CartContext);

  const handleDelete = () => {
    clear();
    ToastAlert('info', 'Se ha eliminado el carrito', '');
  }

  return (
    <div className='cart'>
      {products.length ?
        <>
          <div className='cartTittle'>
            <h3 className='tittleItem'>Item</h3>
            <div className='tittleItemPCT'>
              <h3>Precio</h3>
              <h3 className='mount'>Cantidad</h3>
              <h3 className='total'>Total</h3>
            </div>
          </div>
          <div className='cart-item'>
            {products.map((p) => <ItemCart item={p} key={'cartItem' + p.id} />)}
            <h4>Total: ${getTotal()}</h4>
            <hr className='divisor' />
            <div className='buttonsContainer'>
              <Link to={'/checkout'}>
                <button className='btn' >Finalizar compra</button>
              </Link>
              <button className='btn-delete' onClick={ handleDelete }>Eliminar carrito</button>
            </div>
          </div>
        </> :
        <div className='cart-item'>
          <h2 className='no-items'>No hay items en el carrito</h2>
          <Link to={'/'}>
            <button className='btn-delete'>Ir al inicio...</button>
          </Link>
        </div>
      }
    </div>
  )
}

export default Cart