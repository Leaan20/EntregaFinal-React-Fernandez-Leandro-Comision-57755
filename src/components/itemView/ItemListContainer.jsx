import './ItemListContainer.css'
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { getProducts } from '../../logic/asyncmock.js';


import Item from './Item';
export default function ItemListContainer(){
    const [items, setItems] = useState([]);
    
    const {categoryId} = useParams();

    useEffect(() => {
        getProducts
            .then((data) => {
                if (categoryId){
                    setItems(data.filter((prod)=> prod.categoria === categoryId))
                } else {
                    setItems(data);
                }
            });
      }, [categoryId]);


    return (
    <>
        <h1>Bienvenido a DuckWave</h1>
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