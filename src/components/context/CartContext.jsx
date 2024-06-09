import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
import { toast } from "react-toastify";


export const CartProvider = ( { children } ) => {
  const [cart, setCart] = useState(initialCart);

  const addToCart = (product, count) => {
    const productAdd = { ...product, cantidad: count };

    const newCart = [...cart];

    const added = newCart.find((item) => item.id === productAdd.id);

    if (added) {
      added.cantidad += count;
    } else {
      newCart.push(productAdd);
    }

    setCart(newCart);

    //Enviamos una notificacion al usuario
    toast.success('Agregaste un producto al carrito🛒🙌', {
      autoClose: 1500,
    });

  };

  
  const cartCount = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
  };


  const totalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
  };

  //Funcion que vacia el carrito
  const cleanCart = () => {
    setCart([]);
  };

  //Eliminamos un producto del carrito
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
    toast.info('Eliminaste un producto del carrito',{
      autoClose: 1500,
    });
  };


  useEffect(() => {
   localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
  

    return (
    <CartContext.Provider value={ {cart ,addToCart, cartCount , totalPrice, cleanCart, removeFromCart} }>
        {children}
    </CartContext.Provider>
    )

};

