import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../contexts/cartContext";
import { useNavigate } from "react-router-dom";

const CartIndicator = () => {
  const val = useContext(CartContext);
  const navigate = useNavigate();
  const {
    state: { cartItems },
    dispatch,
  } = val;

  return (
    <div style={{ display: "flex", flexDirection: "row", marginRight: 20 }}>
      <p style={{ color: "#FFF" }}>{cartItems?.length || 0}</p>
      <FontAwesomeIcon
        icon={faCartShopping}
        color={"#FFF"}
        onClick={() => navigate("cart")}
      />
    </div>
  );
};

export default CartIndicator;
