import './Item.css';
import ButtonComponent from './ButtonComponent';
export default function Item ({title,category,price,image,idItem}){
    return (
        <>
        <div className='card'  id={idItem}>
            <img className='img' src={image} alt={title}></img>
            <div>
            <h4 className='cardTitle'>{title}</h4>
            <h5 className='category'>{category}</h5>
            <p>Precio: ${price}</p>
            </div>
            <ButtonComponent className='buttonStyle' text={"Ver detalles"} />
        </div>
        </>
    )
}