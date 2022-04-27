import React from 'react'
import './Item.css'

const Item = ({ item }) => {
    return (
        <div className='card'>
            <div className='img-container'>
                <img className='product-img' src={item?.img} alt="Imagen del producto" />
            </div>
            <div className="product-price">
                <p>${item?.price}</p>
            </div>
            <div className='description-container'>
                <p className="product-name">{item?.name}</p>
                <div className='product-stock'>
                    <hr />
                    <p>stock: {item?.stock}</p>
                </div>
            </div>
        </div>
    )
}

export default Item

