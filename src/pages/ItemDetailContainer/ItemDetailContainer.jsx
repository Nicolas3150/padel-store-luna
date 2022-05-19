import { doc, getDoc, getFirestore } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import Loading from '../../components/Loading/Loading'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemRef = doc(db, "items", id);

        getDoc(itemRef)
            .then(snapshot => {
                if(snapshot.exists()){
                    setItem({
                        "id": snapshot.id,
                        ...snapshot.data()
                    })
                }
            })
            .catch(err => {
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