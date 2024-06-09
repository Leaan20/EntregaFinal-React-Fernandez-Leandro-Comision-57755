import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

import './Cart.css';
import { toast } from 'react-toastify';
export default function Cart(){

    const { cart, totalPrice, cleanCart, removeFromCart } = useContext(CartContext);
    
    const handleEmpty = () => {
        toast.success('Se ha vaciado el carrito', {
            autoClose: 1000,
          })
        cleanCart();
    }

    return (
        <>
            <div className="cartContenedor">
                <div> <h2>Carrito de Compras</h2> </div>
                
                <ul className="cartItemList">
                    {cart.map((prod) => (
                        <li key={prod.id} className="cartItem">
                            <img src={prod.image} alt={prod.title} />

                            <div className="cartItemInfo">
                                <h4>Producto: {prod.title}</h4>
                                <p>Cantidad: {prod.cantidad}</p>
                                <p>Precio por unidad: ${prod.price}</p>
                                <p>Precio Total: ${prod.price * prod.cantidad}</p>
                            </div>

                            <div className="cartItemActions">
                                <button className="cartItemDelete" onClick={() => removeFromCart(prod.id)}>Eliminar</button>
                            </div>

                        </li>
                    ))}
                </ul>

                
                {
                    cart.length > 0 ?
                    <>
                    <h2>Precio Total: ${totalPrice()}</h2>

                    <div className='cartOptions'>
                    <button onClick={handleEmpty}>Vaciar Carrito</button>

                    <Link to={'/checkout'}>
                    <button>Continuar con la compra</button>
                    </Link>
                    </div>
                    </>
                    :
                    <p className='parrafo'>El Carrito esta vacio 😓🛒</p>
                }




            </div>
        </>
    );
}
