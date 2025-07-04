import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

 const addToCart = (product) => {
  setCartItems((prev) => {
    const existing = prev.find((item) => item.id === product.id);

    // If it's already in the cart, increase quantity
    if (existing) {
      toast.info(`Increased quantity of "${product.title}" to ${existing.quantity + 1}`);
      return prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    // ✅ If trying to add a new product but cart already has 4 unique items
    if (prev.length >= 4) {
      toast.warning("You can't add more than 4 unique items to the cart");
      return prev; // Don't add
    }

    // Else: Add new product
   
    return [...prev, { ...product, quantity: 1 }];
  });
};


const removeFromCart = (id) => {
  const item = cartItems.find((item) => item.id === id);
  if (item) toast.error(`Removed "${item.title}" from cart`);
  setCartItems((prev) => prev.filter((item) => item.id !== id));
};

const increaseQty = (id) => {
  setCartItems((prev) =>
    prev.map((item) => {
      if (item.id === id) {
        toast.info(`Increased "${item.title}" to ${item.quantity + 1}`);
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    })
  );
};

const decreaseQty = (id) => {
  setCartItems((prev) =>
    prev.map((item) => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity - 1);
        toast.info(`Decreased "${item.title}" to ${newQty}`);
        return { ...item, quantity: newQty };
      }
      return item;
    })
  );
};

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, increaseQty, decreaseQty }}
    >
      {children}
    </CartContext.Provider>
  );
};
