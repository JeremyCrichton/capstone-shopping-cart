import React, { Component } from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";

import data from "../lib/data";

class App extends Component {
  state = {
    items: null,
    cartItems: [],
  };

  componentDidMount() {
    this.setState({ items: data });
  }

  addItemToCart = (id) => {
    const item = this.state.items.filter(item => item.id === id)[0];
    this.setState(prev => {
      const newCart = [...prev.cartItems, item];
      return { ...prev, cartItems: newCart };
    });
  }

  render() {
    return (
      <div id="app">
        <header>
          <h1>The Shop!</h1>
          <Cart cartItems={this.state.cartItems} />
        </header>
        <main>
          {this.state.items && <ProductList items={this.state.items} addItem={this.addItemToCart} />}
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
