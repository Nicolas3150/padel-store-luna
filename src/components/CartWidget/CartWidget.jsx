import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'
import CartContext from '../../store/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div className='cart-container'>
      <Link to='/cart'><FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
        {cartCtx.products.length ?
          <div className='bubble'>
            <p>{cartCtx.getCartQuantity()}</p>
          </div> :
          ''
        }
      </Link>
    </div>
  )
}

export default CartWidget