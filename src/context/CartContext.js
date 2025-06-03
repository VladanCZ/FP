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

/*manually set the exact number of items in the cart */
    case "UPDATE_QUANTITY":
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

/* Loop through everything in the cart (state) and return a new 
version of the array that contains everything except the item 
with the same ID as the one in action.payload.*/
    case "REMOVE_FROM_CART":
      return state.filter(item => item.id !== action.payload.id);

    case "CLEAR_CART":
      return [];

      /* If no case matches
returns the state; Returns the original state unchanged*/
    default:
      return state;
  }
};

/*creates cart state management - cart contains data and 
"dispatch" is used to change it according to the rules in the 
"cartReducer" function. The default state is loaded from localStorage.*/
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  /*When changing the contents of the cart, the current state is saved
   to localStorage. The state is preserved even after reloading the page.*/
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  /*makes cart information and editing functionality 
  available to all nested components*/
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

/*get cart data in other parts of the application.*/
export const useCart = () => useContext(CartContext);
