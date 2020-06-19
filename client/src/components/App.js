import React, { Component } from "react";
import CartContainer from "./CartContainer";
import ProductListContainer from "./ProductListContainer";
import AddProductContainer from "./AddProductContainer";

class App extends Component {
  render() {
    return (
      <div id="app">
        <header>
          <h1>The Shop!</h1>
          <CartContainer />
        </header>
        <main>
          <ProductListContainer />
          <AddProductContainer />
        </main>
      </div>
    );
  }
}

export default App;
