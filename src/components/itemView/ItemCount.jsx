import './ItemCount.css';

export default function ItemCount({ count, handleSum, handleRest , handleAddToCart}) {



    return (
        <>  <div className='addProductContainer'>

                <div className='buttonsAyR'>
                    <button className="buttonHandler" onClick={handleRest}> - </button>
                    <p className="productQuantity">{count}</p>
                    <button className="buttonHandler" onClick={handleSum}> +  </button>
                </div>
            
                <button onClick={handleAddToCart} >Agregar al carrito</button>
       
            </div>
        </>
    )
}