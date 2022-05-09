import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ item }) => {
    const [clicked, setClicked] = useState(true);
    const handleClick = () => {
        setClicked(!clicked);
    }

    const addCart = () => {
        alert(`Agregaste ${item?.name} al carrito`);
    }

    /*
            Specs: Especificaciones de cada producto. Puede no tener especificaciones definidas.
            Valor de retorno de Object.entries(): Un array de los pares [clave, valor] de 
            la propiedad enumerable del objeto dado.
        */
    let specs = Object.entries(item.specs);

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
            <div className={`item-specs ${clicked ? "active" : ""}`}>
                <div className={`specs-table`}>
                    {specs.map(spec =>
                        <div className='row' key={`row` + specs.indexOf(spec)}>
                            {/* specs[0] es la 'clave' de cada elemento*/}
                            <div className='col-1'>{spec[0]}</div>
                            {/* specs[1] es el 'valor' de cada elemento*/}
                            <div className='col-2'>{spec[1]}</div>
                        </div>
                    )}
                </div>
                <div className='specs-title' onClick={handleClick}>
                    <h3> Especificaciones </h3>
                </div>
            </div>
        </>
    )
}

export default ItemDetail