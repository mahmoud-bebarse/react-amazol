import React, { useReducer } from "react";
import Navbar from "../navbar";
import { Products, Slideshow } from "../Data/products";
import WrappedText from "./../components/WrappedText";
import "./home.css";
import { CartReducer, initState } from "../reducers/cartReducer";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const HomeEx = () => {
  const slideshow = Slideshow;
  const [cart, dispatch] = useReducer(CartReducer, initState);

  const handleAddItem = (item) => {
    dispatch({ type: "ADD", item });
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="slide-container">
          <Fade>
            {slideshow.map((slide) => (
              <div className="each-fade" key={slide.id}>
                <div className="image-container">
                  <img
                    className="ad"
                    alt={slide.dis}
                    src={require(`../images/${slide.src}`)}
                  />
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "70%",
          marginLeft: 285,
        }}
      >
        {Products.map((product) => (
          <div key={product.id} className="product">
            <div className="desc">
              <img
                className="img"
                src={require(`../images/${product.src}`)}
                alt={product.dis}
              />
              <WrappedText text={product.dis} limit={60} />
            </div>
            <button
              type="button"
              onClick={() => handleAddItem(product)}
              className="btn btn-dark add"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeEx;
