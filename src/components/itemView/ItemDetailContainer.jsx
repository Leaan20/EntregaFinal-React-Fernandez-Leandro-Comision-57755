import ItemDetails from "./ItemDetails";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import {doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.js";

export default function ItemDetailContainer(){

    const [product, setProduct] =useState({});

    const {Id} = useParams();
    useEffect(()=>{

        const dbProductRef= doc(db, 'ItemCollection', Id)
        getDoc(dbProductRef)
            .then((res => {
                setProduct(
                    {...res.data(), id: res.id }
                );
            }))
    },[Id])

    return (
        <>

        {/** Pasamos por props el producto obtenido con la promesa */}
        <ItemDetails product={product} />
        </>
    )
}