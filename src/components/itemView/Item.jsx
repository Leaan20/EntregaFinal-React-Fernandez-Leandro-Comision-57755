import './Item.css';
import { Link } from 'react-router-dom';
export default function Item ({title,category,price,image,idItem , idProdc}){
    return (
        <>
        <div className='card'  id={idItem}>
            <img className='img' src={image} alt={title}></img>
            <div>
            <h4 className='cardTitle'>{title}</h4>
            <h5 className='category'>{category}</h5>
            <p>Precio: ${price}</p>
            </div>
            <button className='buttonStyle'><Link to={`/product/${idProdc}`}>Ver detalles</Link></button>
        </div>
        </>
    )
}