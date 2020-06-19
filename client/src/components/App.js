import React, { Component } from "react";
import Cart from "./Cart";
import ProductListContainer from "./ProductListContainer";
import AddProduct from "./AddProduct";

class App extends Component {
  render() {
    return (
      <div id="app">
        <header>
          <h1>The Shop!</h1>
          <Cart />
        </header>
        <main>
          <ProductListContainer />
          <AddProduct />
        </main>
      </div>
    );
  }
}

export default App;
