import React, { useReducer, createContext } from "react";
import { CartReducer, initCartState } from "./../reducers/cartReducer";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initCartState);

  return (
    <CartContext.Provider value={{ state, dispatch: dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
