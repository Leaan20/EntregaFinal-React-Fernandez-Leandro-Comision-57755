import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const initialCart = JSON.parse(localStorage.getItem('cart')) || [];



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
  };

  const cartCount = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
  };
  const totalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
  };

  const cleanCart = () => {
    setCart([]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
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

