import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ItemList from '../../components/ItemList/ItemList'
import Loading from '../../components/Loading/Loading'
import { errorAlert } from '../../components/Alert/Alert'

import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'


import './ItemListContainer.css'

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();
  useEffect(() => {
    setLoading(true);

    const itemCollection = collection(db, 'items')
    const items = categoryId ? query(itemCollection, where('category', '==', categoryId)) : itemCollection;

    getDocs(items)
      .then(snapshot => {
        setProducts(snapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() }
        }))
      })
      .catch(err => {
        errorAlert('Ha ocurrido un error al cargar los productos.');
        console.log(err)
      })
      .finally(() => {
        setLoading(false);
      })

  }, [categoryId]);

  return (
    <div className='item-container'>
      {loading ? <Loading /> : <ItemList items={products} />}
    </div>
  )
}

export default ItemListContainer;