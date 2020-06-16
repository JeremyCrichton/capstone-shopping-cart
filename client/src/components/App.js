import React, { Component } from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";

import data from "../lib/data";

class App extends Component {
  state = {
    items: [],
    cartItems: [],
  };

  componentDidMount() {
    this.getAllItems();
    // this.setState({ items: data });
  }

  getAllItems() {
    fetch("/api/products")
      .then(response => response.json())
      .then(data => this.setState({ items: data }))
      .catch(err => console.log(err));
  }

  // increment/decrement cart/items qty
  // finding element
  // set state for cart --> handle update in server --> set state for product
  getItemFromArray = (arr, id) => {
    return arr.find(el => el.id === id);
  }

  handleItemDecrement = (id) => {
    const item = this.getItemFromArray(this.state.items, id);
    const body = JSON.stringify({ ...item, quantity: item.quantity - 1 });
    console.log("body", body);
    fetch(`/api/products/${id}`, {
      method: "PUT",
      body: JSON.stringify({ ...item, quantity: item.quantity - 1 }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => console.log(response.json()))
      // .then(response => this.setState({ items: [...this.state.items, response] }))
      .catch(err => console.log(err))
  }

  addItemToCart = (id) => {
    this.handleItemDecrement(id);

    this.setState(prev => {
      console.log('hi');
      // const itemFromItems = this.getItemFromArray(prev.items, id)
      // const itemFromCart = this.getItemFromArray(prev.cartItems, id);
      // const itemsQty = itemFromItems.quantity - 1;
      // const cartQty = itemFromCart ? 1 : itemFromCart.quantity + 1;
      // const newCartItem = { ...itemFromCart, quantity: cartQty };
      // const newCart = prev.cartItems.filter(item => item.id !== id);
      // const newItems = [...newCart, newCartItem];
      // return { ...prev, cartItems: newCart };
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
          {this.state.items.length > 0 && <ProductList items={this.state.items} addItem={this.addItemToCart} />}
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
