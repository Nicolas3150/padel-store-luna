import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import Loading from '../../components/Loading/Loading'
import './ItemDetailContainer.css'

const getItem = (id) => {
    const myPromise = new Promise((resolve, reject) => {
        const productList = [
            {
              "id": 1,
              "name": "Paleta de Padel Adidas",
              "price": 34000,
              "img": "https://http2.mlstatic.com/D_NQ_NP_2X_878380-MLA40664734843_022020-F.webp",
              "stock": 2,
              "category": "Paletas",
              "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima rerum velit cumque, corporis voluptatibus laboriosam autem aperiam distinctio sed unde quod suscipit fuga numquam veritatis, eum beatae fugiat exercitationem aut?",
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
          },
          {
              "id": 2,
              "name": "Paleta de Padel Royal",
              "price": 26999,
              "img": "https://nuro.com.ar/wp-content/uploads/2021/11/tigra-white-royal.jpg.webp",
              "stock": 4,
              "category": "Paletas",
              "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima rerum velit cumque, corporis voluptatibus laboriosam autem aperiam distinctio sed unde quod suscipit fuga numquam veritatis, eum beatae fugiat exercitationem aut?",
              "specs": {}
          },
          {
              "id": 3,
              "name": "Presurizador Pelotas de Padel",
              "price": 4790,
              "img": "https://http2.mlstatic.com/D_NQ_NP_710970-MLA47215084775_082021-O.jpg",
              "stock": 6,
              "category": "Accesorios",
              "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima rerum velit cumque, corporis voluptatibus laboriosam autem aperiam distinctio sed unde quod suscipit fuga numquam veritatis, eum beatae fugiat exercitationem aut?",
              "specs": {}
          },
          {   
              "id": 4,
              "name": "Pelota de Padel Penn x3",
              "price": 1169,
              "img": "https://http2.mlstatic.com/D_NQ_NP_847336-MLA48642683612_122021-O.jpg",
              "stock": 100,
              "category": "Pelotas",
              "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima rerum velit cumque, corporis voluptatibus laboriosam autem aperiam distinctio sed unde quod suscipit fuga numquam veritatis, eum beatae fugiat exercitationem aut?",
              "specs": {}
          },
          {
              "id": 5,
              "name": "Xgrip Padel Agarre",
              "price": 4999,
              "img": "https://http2.mlstatic.com/D_NQ_NP_960309-MLA48198589630_112021-O.jpg",
              "stock": 6,
              "category": "Accesorios",
              "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima rerum velit cumque, corporis voluptatibus laboriosam autem aperiam distinctio sed unde quod suscipit fuga numquam veritatis, eum beatae fugiat exercitationem aut?",
              "specs": {}
          },
          {
              "id": 6,
              "name": "Remera Royal",
              "price": 3600,
              "img": "https://royalpadel.com.ar/web2/wp-content/uploads/2019/08/war-gris.jpg",
              "stock": 13,
              "category": "Indumentaria",
              "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima rerum velit cumque, corporis voluptatibus laboriosam autem aperiam distinctio sed unde quod suscipit fuga numquam veritatis, eum beatae fugiat exercitationem aut?",
              "specs": {}
          }];
        const item = productList.filter(item => item.id === parseInt(id));
        setTimeout(() => {
            resolve(item[0]);
        }, 2000);
    })
    return myPromise;
}

const ItemDetailContainer = () => { 
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        getItem(id)
            .then(res => {
                setItem(res);
            })
            .catch(err => {
                console.log(err);
                alert('Ocurrio un error');
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);
    return (
        <div className='item-container'>
            { loading ? <Loading /> : <ItemDetail item = { item }/>}
        </div>
    )
}

export default ItemDetailContainer