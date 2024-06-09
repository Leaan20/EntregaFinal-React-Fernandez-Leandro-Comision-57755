import './ItemListContainer.css'
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

import { collection, getDocs, query , where } from 'firebase/firestore';
import { db } from '../../firebase/firebase.js';
import Loader from '../loader/Loader';


import Item from './Item';
export default function ItemListContainer(){


    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState (false);
    
    const {categoryId} = useParams();

    //Utilizando hook useEffect
    useEffect(() => {
        const dbProductsRef = collection(db, 'ItemCollection');

        //si existe una categoria ,lo muestre, caso contrario muestre la referencia a los productos.
        const qu = categoryId ? query(dbProductsRef, where('categoryId', '==', categoryId )) : dbProductsRef ;
        //utilizamos este loader
        setIsLoading(true)
        getDocs(qu)
            .then(res => {

               setItems(
                    res.docs.map((doc)=> {
                        return {...doc.data(), id: doc.id}
                    })
                );
                setIsLoading(false);
            })

      }, [categoryId]);


    return (
    <>
        <h1>Bienvenido a DuckWave</h1>
        {isLoading &&  <Loader />}

        <article className='itemContainer'>
           {items.map((item)=>(
            <Item
            brand={item.brand}
            key={item.id}
            title={item.title}
            category = {item.categoryId}
            price={item.price}
            image={item.image}
            idItem={item.id}
            idProdc={item.id}
            />
           ))}
        </article>
    </>
    )
}