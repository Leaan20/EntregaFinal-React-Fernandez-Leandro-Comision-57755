import { useContext } from 'react';
import cartIco from '../../assets/icon/cartIco.svg';
import './CartWidget.css';
import { CartContext } from '../context/CartContext';


export default function CartWidget(){

    const {cartCount} = useContext(CartContext);





    return (
        <>
            <div className='cartContainer'>
                <img src={cartIco} alt="Carrito"  className='cart' />
               <p className='cantidad'> {cartCount()}</p>
            </div>
        </>
    )
}