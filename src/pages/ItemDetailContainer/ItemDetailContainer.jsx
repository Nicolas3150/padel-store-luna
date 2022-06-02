import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ItemDetail from '../../components/ItemDetail/ItemDetail'
import Loading from '../../components/Loading/Loading'
import { errorAlert } from '../../components/Alert/Alert'

import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../services/firebase'

import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    const { id } = useParams();

    useEffect(() => {
        const itemRef = doc(db, "items", id);

        getDoc(itemRef)
            .then(snapshot => {
                if (snapshot.exists()) {
                    setItem({
                        "id": snapshot.id,
                        ...snapshot.data()
                    })
                } else {
                    errorAlert('No se ha encontrado el producto.');
                }
            })
            .catch(err => {
                errorAlert('Ha ocurrido un error al cargar el producto.');
                console.log(err)
            })
    }, [id]);
    return (
        <div className='item-container'>
            {Object.keys(item).length === 0 ? <Loading /> : <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer