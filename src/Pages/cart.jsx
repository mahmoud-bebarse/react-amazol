import React, { useContext } from "react";
import { CartContext } from "./../contexts/cartContext";
import WrappedText from "./../components/WrappedText";
import Navbar from "../navbar";

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
      <Navbar />
      <div style={{ marginLeft: 130, marginTop: 30 }}>
        <h1>Cart Items</h1>
        {cartItems.map((p) => (
          <div
            key={p.id}
            style={{
              display: "flex",
              flexDirection: "row",
              borderColor: "black",
                border: "solid",
                borderBottomLeftRadius: 25,
                borderTopRightRadius:25,
                marginTop: 20,
              marginLeft:60,
                width: 600,
            }}
          >
            <img
              style={{ width: 70, height: 70, marginLeft:20 }}
              alt={p.dis}
              src={require(`../images/${p.src}`)}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 40,
              }}
            >
              <WrappedText  text={p.dis} limit={60} />
              <button
                        className="btn btn-dark"
                        style={{width:200,marginLeft:90}}
                onClick={() => handleRemoveItem(p)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
