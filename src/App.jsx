import React, { Component } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routing";
import { CartContextProvider } from "./contexts/cartContext";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <CartContextProvider>
          <RouterProvider router={router} />
        </CartContextProvider>
      </div>
    );
  }
}

export default App;
