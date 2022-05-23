import React, { useContext } from 'react'
import CartContext from '../../store/CartContext'
import ItemCart from '../../components/ItemCart/ItemCart'
import './Cart.css'
import { Link } from 'react-router-dom'

const Cart = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div className='cart'>
      {cartCtx.products.length ?
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
            {cartCtx.products.map((p) => <ItemCart item={p} key={'cartItem' + p.id} />)}
            <h4>Total: ${cartCtx.getTotal()}</h4>
            <hr className='divisor' />
            <div className='buttonsContainer'>
              <button className='btn' >
                <Link to={'/checkout'}>Finalizar compra</Link>
              </button>
              <button className='btn-delete' onClick={() => cartCtx.clear()}>Eliminar carrito</button>
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