import React, { useContext } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import CartContext from '../../store/CartContext'

import { Link } from 'react-router-dom'

import './CartWidget.css'

const CartWidget = () => {
  const { products, getCartQuantity } = useContext(CartContext);

  return (
    <div className='cart-container'>
      <Link to='/cart'><FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
        {products.length ?
          <div className='bubble'>
            <p>{getCartQuantity()}</p>
          </div> :
          ''
        }
      </Link>
    </div>
  )
}

export default CartWidget