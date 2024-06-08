import { useState } from 'react';

import {addOrders} from '../../firebase/firebase.js';

export default function addOrders() {



    // const newOrder = {
    // }

    //date: new Date()toLocaleDateString;

    const handleClick = ()=> {
        addOrders(newOrder).then(id => setOrderId(id));
    }




  return (
    <>
        <button onClick={handleClick} >Enviar nueva orden de pedido</button>
        {orderId && <p>Nueva orden de pedido generada id:{orderId} , con fecha de {order.date} , muchas gracias por su compra ! </p>

        }
        
    </>
  )
}


//Informar de alguna manera que se realizo el pedido , el id debe poder verse en el DOM, con una modificacion de estado.