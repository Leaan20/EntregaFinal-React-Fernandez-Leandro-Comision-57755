import {getProduct} from '../../logic/asyncmock.js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './ItemDetails.css';
import ButtonComponent from './ButtonComponent';
import ItemCount from './ItemCount';

export default function ItemDetail() {

const [product, setProduct] =useState({});

const {Id} = useParams();

useEffect(()=>{
    getProduct(Number(Id))
        .then((res)=> {
            setProduct(res)
        })
    // setProduct(getProduct(Id));
},[])

    return (
        <>
            <div className='detailContainer'>
                <div>
                    <img className='detailImg' src={product.img} alt={product.nombre} />
                </div>

                <div className='detailInfo'>
                    <h4>{product.nombre}</h4>
                    <p>${product.precio}</p>
                </div>

                <div className='details'>
                    <h6>{product.categoria}</h6>
                    <p>Color:{product.color}</p>
                    <p>Marca:{product.marca}</p>
                    <p>Cantidad: 1 </p>
                </div>


                <div className='addProductContainer'>
                    <ButtonComponent text={"Agregar al carrito"} />
                    <ItemCount />
                </div>
            </div>
        </>
    )
}