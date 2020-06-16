import React, { Component } from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import axios from "axios";

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
    axios.get("/api/products")
      .then(({ data }) => this.setState({ items: data }))
      .catch(err => console.log(err));
  }

  // increment/decrement cart/items qty
  // finding element
  // set state for cart --> handle update in server --> set state for product
  getItemFromArray = (arr, id) => {
    return arr.find(el => el._id === id);
  }

  handleUpdateProduct = (id, update) => {
    axios.put(`/api/products/${id}`, {
      ...update
    })
      .then(({ data }) => {
        this.setState(prev => {
          const prevItems = prev.items.filter(item => item._id !== id);
          const newItems = [...prevItems, data];
          return { items: newItems };
        });
      })
      .catch(err => console.log(err));
  }

  handleEditProduct = (id, update) => {
    this.handleUpdateProduct(id, update);
  }

  handleItemDecrement = (id) => {
    const item = this.getItemFromArray(this.state.items, id);
    this.handleUpdateProduct(id, { quantity: item.quantity - 1 });
  }

  addItemToCart = (id) => {
    this.handleItemDecrement(id);

    // this.setState(prev => {
    //   console.log('hi');
    // const itemFromItems = this.getItemFromArray(prev.items, id)
    // const itemFromCart = this.getItemFromArray(prev.cartItems, id);
    // const itemsQty = itemFromItems.quantity - 1;
    // const cartQty = itemFromCart ? 1 : itemFromCart.quantity + 1;
    // const newCartItem = { ...itemFromCart, quantity: cartQty };
    // const newCart = prev.cartItems.filter(item => item.id !== id);
    // const newItems = [...newCart, newCartItem];
    // return { ...prev, cartItems: newCart };
    // });

  }

  render() {
    return (
      <div id="app">
        <header>
          <h1>The Shop!</h1>
          <Cart cartItems={this.state.cartItems} />
        </header>
        <main>
          {this.state.items.length > 0 && <ProductList items={this.state.items} addItem={this.addItemToCart} editItem={this.handleEditProduct} />}
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
