import './ItemListContainer.css'

import {useState, useEffect} from 'react';
import { getProducts } from '../../logic/asyncmock.js';
import Item from './Item';
export default function ItemListContainer(){
    const [items, setItems] = useState([]);

    useEffect(() => {
        getProducts.then((data) => setItems(data));
      }, []);


    return (
    <>
        <h1>Productos</h1>
        <article className='itemContainer'>
           {items.map((item)=>(
            <Item
            key={item.id}
            title={item.nombre}
            category = {item.categoria}
            price={item.precio}
            image={item.img}
            idItem={item.id}
            idProdc={item.id}
            />
           ))}
        </article>
    </>
    )
}