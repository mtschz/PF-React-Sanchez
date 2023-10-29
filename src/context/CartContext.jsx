import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addItem = (item, quantityAdded) => {
      if (isInCart(item.id)) {
        setCart(cart.map((product) => {
          if (product.id === item.id) {
            return { ...product, quantityAdded: product.quantityAdded + quantityAdded };
          }else{
            return product;
          }
        }));
        console.log("Item already exists in the cart.");
      } else {
        setCart([...cart, { ...item, quantityAdded }]);
      }
    };

    const clear = () => {
      setCart([])
    }

    const isInCart = (id) => {
      return cart.some((item) => item.id === id)
    } 

    const removeItem = (id) => {
      setCart(cart.filter((item) => item.id !== id))
    }

    const cartQuantity = () => {
      return cart.reduce((acc, item) => acc + item.quantityAdded, 0)
    }

    const total = () => {
      return cart.reduce((acc, item) => acc + item.quantityAdded * item.precio, 0)
    }

    return (
      <CartContext.Provider value={{ cart, addItem, removeItem, clear, cartQuantity, total }}>
        {children}
      </CartContext.Provider>
    );
  };