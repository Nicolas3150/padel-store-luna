import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../components/ItemList/ItemList'
import Loading from '../../components/Loading/Loading'
import './ItemListContainer.css'

const getProducts = (category) => {
  const myPromise = new Promise((resolve,reject) => {
    const productList = [
      {
        "id": 1,
        "name": "Paleta de Padel Adidas",
        "price": 34000,
        "img": "https://http2.mlstatic.com/D_NQ_NP_2X_878380-MLA40664734843_022020-F.webp",
        "stock": 2,
        "category": "Paletas"
    },
    {
        "id": 2,
        "name": "Paleta de Padel Royal",
        "price": 26999,
        "img": "https://nuro.com.ar/wp-content/uploads/2021/11/tigra-white-royal.jpg.webp",
        "stock": 4,
        "category": "Paletas"
    },
    {
        "id": 3,
        "name": "Presurizador Pelotas de Padel",
        "price": 4790,
        "img": "https://http2.mlstatic.com/D_NQ_NP_710970-MLA47215084775_082021-O.jpg",
        "stock": 6,
        "category": "Accesorios"
    },
    {   
        "id": 4,
        "name": "Pelota de Padel Penn x3",
        "price": 1169,
        "img": "https://http2.mlstatic.com/D_NQ_NP_847336-MLA48642683612_122021-O.jpg",
        "stock": 100,
        "category": "Pelotas"
    },
    {
        "id": 5,
        "name": "Xgrip Padel Agarre",
        "price": 4999,
        "img": "https://http2.mlstatic.com/D_NQ_NP_960309-MLA48198589630_112021-O.jpg",
        "stock": 6,
        "category": "Accesorios"
    },
    {
        "id": 6,
        "name": "Remera Royal",
        "price": 3600,
        "img": "https://royalpadel.com.ar/web2/wp-content/uploads/2019/08/war-gris.jpg",
        "stock": 13,
        "category": "Indumentaria"
    }];
    const productFilter = category ?  productList.filter(prod => prod.category === category) : productList;
    setTimeout(() => {
      resolve(productFilter);
    }, 2000);
  })
  return myPromise;
}

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProducts(categoryId)
      .then(res => {
        setProducts(res);
      })
      .finally(() => {
        setLoading(false);
      });
  },[categoryId]);

  return (
    <div className='item-container'>
      { loading ? <Loading /> : <ItemList items={ products }/>}
    </div>
  )
}

export default ItemListContainer;