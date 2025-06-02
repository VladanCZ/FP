/* 
 - createContext – for data sharing (so that anyone in the application
 can "see" and change the cart)
 - useContext – to easily get this data where you need it
 - useReducer – for managing states (what should be in the cart)
 - useEffect – to save the cart to localStorage, so it survives page refresh */
import React, { createContext, useContext, useReducer, useEffect } from "react";

/*Creates a place to store and
 share cart information between components. */
const CartContext = createContext(); 

/*When loading the page, it looks in localStorage – if there is no 
cart already stored there.
– If there is nothing there, it starts with an empty cart.*/
const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

/* Function, state – current cart status (product field),action – what should
 happen (add, delete, change quantity)
   1️) Checks if the product is already in the cart.
   2️) If it is – increases its quantity by 1.
   3️) If it is not – adds a new product to the cart with a quantity of 1. */
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
