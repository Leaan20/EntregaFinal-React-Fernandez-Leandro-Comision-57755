import {useState} from 'react';

import './ContactComponent.css';

export default function ContactComponent(){


const [values, setValues] = useState({
    nombre: '',
    email: '',
    phone: ''
});


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('enviado', values);
    }

const handleValues = (event)=> {
    setValues({...values, [event.target.name]: event.target.value });
}

    return (
        <>

        <h1>Sección de contacto</h1>

        <div className="form-container">
            <form className="formu"  onSubmit={handleSubmit}>
                <input type="text" placeholder="Ingrese su nombre"  value = {values.nombre} onChange={handleValues} name='nombre'  />


                <input type="email" placeholder="Ingrese su email" value={values.email} onChange={handleValues} name='email' />


                <input type="phone" placeholder="Ingrese su numero telefonico " value={values.phone} onChange={handleValues} name='phone' />
                <button type='submit' >Enviar</button>
            </form>
        </div>



        </>
    )
}