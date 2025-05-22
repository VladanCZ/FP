import React, { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();


const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const existing = state.find(item => item.id === action.payload.id);
      if (existing) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];

    case "UPDATE_QUANTITY":
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

    case "REMOVE_FROM_CART":
      return state.filter(item => item.id !== action.payload.id);

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
