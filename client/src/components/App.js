import React, { Component } from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";

import data from "../lib/data";

class App extends Component {
  state = {
    items: null,
    cartItems: null,
  };

  componentDidMount() {
    this.setState({ items: data });
  }

  render() {
    return (
      <div id="app">
        <header>
          <h1>The Shop!</h1>
          <Cart cartItems={this.state.cartItems} />
        </header>
        <main>
          {this.state.items && <ProductList items={this.state.items} />}
          <AddProduct />
        </main>
      </div>
    );
  }
}

export default App;

/**
 * Shop
 *  - Cart
 *  - Products
 *   - EditableProduct
 *     - Product
 *     - EditProductForm
 * - AddProduct
 *   - AddProductForm
 */
