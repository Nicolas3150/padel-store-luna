import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'

const getItem = () => {
    const myPromise = new Promise((resolve, reject) => {
        const item = {
            "id": 1,
            "name": "Paleta de Padel Adidas",
            "price": 34000,
            "img": "https://http2.mlstatic.com/D_NQ_NP_2X_878380-MLA40664734843_022020-F.webp",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati libero facere molestias velit quaerat dolorum soluta, culpa sint praesentium quasi, error, eligendi officia. Praesentium corporis cumque veniam natus dolorem inventore.",
            "stock": 2,
            "specs": {
                //Las especificaciones pueden variar por cada producto
                "Marca": "Adidas",
                "Modelo": "Match ligth",
                "Origen": "Importado",
                "Peso": "345-360 grs",
                "Marco": "Carbono - 38 mm",
                "Forma": "Lágrima",
                "Balance": "Medio"
            }
        }
        setTimeout(() => {
            resolve(item);
        }, 2000);
    })
    return myPromise;
}

const ItemDetailContainer = () => { 
    const [item, setItem] = useState({});
    const [specs, setSpecs] = useState([]);

    useEffect(() => {
        getItem()
            .then(res => {
                setItem(res);
                return res;
            })
            .then(res => {
                setSpecs(Object.entries(res.specs));
            })
            .catch(err => {
                console.log(err);
                alert('Ocurrio un error');
            });
    }, []);
    return (
        <div className='item-container'>
            <ItemDetail item = { item } specs={ specs }/>
        </div>
    )
}

export default ItemDetailContainer