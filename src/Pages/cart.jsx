import React, { useContext } from "react";
import { CartContext } from "./../contexts/cartContext";

const Cart = () => {
  const val = useContext(CartContext);
  const {
    state: { cartItems },
    dispatch,
  } = val;

  const handleRemoveItem = (item) => {
    dispatch({ type: "REMOVE", item });
  };

  return (
    <div>
      {cartItems.map((p) => {
        return (
          <div key={p.id}>
            <div>
              <p>{p.dis}</p>
            </div>
            <div>
              <div onClick={() => handleRemoveItem(p)}>remove</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
