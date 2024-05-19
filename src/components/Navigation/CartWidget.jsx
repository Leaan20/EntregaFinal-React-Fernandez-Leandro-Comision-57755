import cartIco from '../../assets/icon/cartIco.svg';
import './CartWidget.css';
export default function CartWidget(){
    return (
        <>
        <img src={cartIco} alt="Carrito"  className='cart' />
        <p className='count'>1</p>
        </>
    )
}