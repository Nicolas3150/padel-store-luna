import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial ? initial : 1);
    const handleDecrease = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }
    const handleIncrease = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    return (
        <div className='itemCount'>
            <div className='buttonCount'>
                <button onClick={ handleDecrease }> - </button>
                <input value = { count } readOnly /> 
                <button onClick={ handleIncrease }> + </button>
            </div>
            <button className='buttonAdd' onClick={() => (count <= stock) && onAdd(count)}>
                Agregar al carrito
            </button>
        </div>
    )
}

export default ItemCount;