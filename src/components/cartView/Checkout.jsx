import './Checkout.css';

import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { toast } from 'react-toastify';

export default function Checkout() {

  const [orderId, setOrderId] = useState('');

  const { cart, totalPrice, cleanCart } = useContext(CartContext);

  const [values, setValues] = useState({
    nombre: '',
    email: '',
    confirmEmail: '',
    phone: ''
});



//configuramos el envio del pedido a FireStore

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
          toast.success("Pedido enviado correctamente !! 🏄🏽‍♀️🏄🏽‍♂️",{
            autoClose: 2000,
          });
        })
    }

const handleValues = (event)=> {
    setValues({...values, [event.target.name]: event.target.value });
}

//Expresion regular para validar el formato de email.
const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
//constante que guarda el formato de validacion de inputs
const inputsValid = (values.nombre && values.email && (values.phone && values.phone.length >= 8));

if(orderId) {
  
  return (
      <div className="finContainer">
        <h2>Muchas gracias por su compra 😁 </h2>
        <p className='parag'>El id de compra es: <span>{orderId}</span></p>
        <p>En breve nos comunicaremos para coordinar el pago y el envio</p>
      </div>
  )
}

    return (
        <>
          <h2>Ingrese sus datos para finalizar el pedido</h2>

        <div className="form-container">
            <form className="formu"  onSubmit={handleSubmit}>

                <label name='nombre' >Nombre:</label>
                <input type="text" placeholder="Ingrese su nombre"  value = {values.nombre} onChange={handleValues} name='nombre'   />
                

                <label name='email' >Email:</label>
                <input type="email" placeholder="Ingrese su email" value={values.email} onChange={handleValues} name='email' />


                <label name='confirmEmail' >Repita su email:</label>
                <input type="email" placeholder="repita su email" value={values.confirmEmail} onChange={handleValues} name='confirmEmail' />


                <label name='phone' >Numero de telefono:</label>
                <input type="phone" placeholder="Ingrese su numero telefonico " value={values.phone} onChange={handleValues} name='phone' />


                {/**  Validacion de datos
                 * Evaluamos que los campos tengan contenido, a su vez que el email tenga el formato valido y que ademas el carrito tenga por lo menos 1 producto para que permita enviar el pedido */}

                {( (inputsValid  && validEmail.test(values.email)
                  && values.email === values.confirmEmail )
                      && cart.length > 0 ) &&  <button type='submit' >comprar</button>}

            </form>
        </div>



        </>
    )




}
