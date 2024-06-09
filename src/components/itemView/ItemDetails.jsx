import {  useContext , useState } from 'react';
import './ItemDetails.css';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';


export default function ItemDetail({ product }) {

    const {cart, addToCart} = useContext(CartContext);
    console.log(cart);

 //Manejo de cantidad
 
 const [count,setCount] = useState(1);

 const handleSum = ()=> {
     //Esto va a permitir que no se pueda sumar mas alla, del stock disponible
     count < product.stock && setCount(count + 1);
 }
 const handleRest = ()=> {
     //No permita al usuario agregar 0 productos al carrito
     count >= 2 && setCount(count -1);
 }




    return (
        <>
            <div className='detailContainer'>
                
                <div>
                    <img className='detailImg' src={product.image} alt={product.nombre} />
                </div>

                <div className='detailInfo'>
                    <h4>{product.title}</h4>
                    <p>Precio: ${product.price}</p>
                </div>

                <div className='details'>
                    <h5>{product.categoryId}</h5>
                    <p>{product.description}</p>
                    <p>Marca: {product.brand}</p>
                    <p>Stock: {product.stock} </p>
                </div>
                
                <ItemCount count= {count} handleSum={handleSum} handleRest={handleRest} handleAddToCart={()=> { addToCart(product , count) }} />

                {
                cart.length > 0 &&
                <Link to={'/cart'}>
                    <button className='continueToBuy'>Ir al carrito</button>
                </Link>
                }
               
            </div>
        </>
    )
}

