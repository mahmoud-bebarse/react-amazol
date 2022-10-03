import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../contexts/cartContext";

const CartIndicator = () => {
  const val = useContext(CartContext);
  const {
    state: { cartItems },
    dispatch,
  } = val;

  return (
    <div style={{ display: "flex", flexDirection: "row", marginRight: 20 }}>
      {console.log("state", cartItems)}
      <p style={{ color: "#FFF" }}>{cartItems?.length || 0}</p>
      <FontAwesomeIcon icon={faCartShopping} color={"#FFF"} />
    </div>
  );
};

export default CartIndicator;
