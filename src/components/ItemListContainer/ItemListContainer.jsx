import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
  const addCart = (count) => {
    let message = `Agregaste ${count} producto`;
    count === 1 ? alert(message) : alert(`${message}s`);
  }

  return (
    <div className='item-container'>
      { greeting }
      <ItemCount stock={ 5 } initial={ 1 } onAdd={ addCart }/>
    </div>
  )
}

export default ItemListContainer;