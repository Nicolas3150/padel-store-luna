import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ item, specs }) => {
    const [clicked, setClicked] = useState(true); 
    
    const handleClick = () => {
        setClicked(!clicked);
    }

    const addCart = () => {
        alert(`Agregaste ${item?.name} al carrito`);
    }

    return (
        <>
            <div className='item'>
                <div className='img-container'>
                    <h2> {item?.name}</h2>
                    <img src={item?.img} alt="" />
                </div>
                <div className='detail-container'>
                    <h1> {item?.name} </h1>
                    <p className='price'>Precio: ${item?.price}</p>
                    <hr />
                    <p className='detail'>{item?.description}</p>
                    <ItemCount stock={item?.stock} onAdd={addCart} />
                    <span>Stock: {item?.stock}</span>
                </div>
            </div>
            <div className={`item-specs ${clicked? "active" : "" }`}>
                <div className={`specs-table`}>
                    <table>
                        <tbody>
                            {specs.map(spec => <tr key={specs.indexOf(spec)}>
                                <th>{spec[0]}</th>
                                <td>{spec[1]}</td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
                <div className='specs-title' onClick={ handleClick }>
                    <h3> Especificaciones </h3>
                </div>
            </div>
        </>
    )
}

export default ItemDetail
