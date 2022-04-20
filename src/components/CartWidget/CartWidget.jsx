import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <FontAwesomeIcon icon={faCartShopping} className="cart-icon"/>
  )
}

export default CartWidget