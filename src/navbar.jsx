import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { CartContextProvider } from "./contexts/cartContext";
import CartIndicator from "./components/cartIndicator";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <div className="lgo">
              <h2>Amazol</h2>
              <p className="e">.eg</p>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus">
                  Contact Us
                </Link>
              </li>
              <form className="d-flex" role="search">
                <input className="search" type="search" placeholder="Search" />
              </form>
            </ul>
          </div>
        </div>
          <CartIndicator />
      </nav>
      <ul
        style={{
          marginTop: 62,
          marginLeft: 0,
          backgroundColor: "#00001a",
          width: 390,
          borderBottomRightRadius: 20,
        }}
      >
        <li style={{ display: "inline", marginLeft: 0 }}>
          <Link className="linky" to="/electronics">
            Electronics
          </Link>
        </li>
        <li style={{ display: "inline", marginLeft: 30 }}>
          <Link className="linky" to="/accessories">
            Accessories
          </Link>
        </li>
        <li style={{ display: "inline", marginLeft: 30 }}>
          <Link className="linky" to="/clothes">
            Clothes
          </Link>
        </li>
        <li style={{ display: "inline", marginLeft: 30 }}>
          <Link className="linky" to="/bags">
            Bags
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
