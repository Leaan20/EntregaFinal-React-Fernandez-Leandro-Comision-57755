import './Checkout.css';

import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export default function Checkout() {

  const [orderId, setOrderId] = useState('');

  const { cart, totalPrice, cleanCart } = useContext(CartContext);

  const [values, setValues] = useState({
    nombre: '',
    email: '',
    phone: ''
});


    const handleSubmit = (event) => {
        event.preventDefault();
        const order = {
          client: values,
          products : cart,
          total : totalPrice()
        }
        console.log(order);

        const refOrder = collection(db, "Orders" );

        addDoc(refOrder, order)
        .then(doc => {
          setOrderId(doc.id);
          cleanCart();
        })
    }

const handleValues = (event)=> {
    setValues({...values, [event.target.name]: event.target.value });
}

if(orderId) {
  return (
      <div className="finContainer">
        <h2>Muchas gracias por su compra 😁 </h2>
        <p className='parag'>El id de compra es: <span>{orderId}</span></p>
      </div>
  )
}

    return (
        <>
          <h2>Ingrese sus datos para finalizar el pedido</h2>

        <div className="form-container">
            <form className="formu"  onSubmit={handleSubmit}>
                <input type="text" placeholder="Ingrese su nombre"  value = {values.nombre} onChange={handleValues} name='nombre'  />


                <input type="email" placeholder="Ingrese su email" value={values.email} onChange={handleValues} name='email' />


                <input type="phone" placeholder="Ingrese su numero telefonico " value={values.phone} onChange={handleValues} name='phone' />
                <button type='submit' >comprar</button>
            </form>
        </div>



        </>
    )




}
