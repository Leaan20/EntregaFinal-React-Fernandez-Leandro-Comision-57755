import ButtonComponent from './ButtonComponent';
import ItemCount from './ItemCount';

export default function ItemDetail() {
    return (
        <>
            <div className='detailContainer'>
                <div>
                    <img className='detailImg' src="" alt="imagen del producto" />
                </div>

                <div className='detailInfo'>
                    <h4>Nombre del item</h4>
                    <h6>categoria</h6>
                    <p>precio</p>
                </div>

                <div className='details'>
                    <p>detalles</p>
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