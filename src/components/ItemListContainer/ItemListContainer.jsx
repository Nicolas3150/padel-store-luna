import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
  return (
    <div className='item-container'>{ greeting }</div>
  )
}

export default ItemListContainer;