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
  }

  getAllItems() {
    axios
      .get("/api/products")
      .then(({ data }) => this.setState({ items: data }))
      .catch((err) => console.log(err));
  }

  // increment/decrement cart/items qty
  // finding element
  // set state for cart --> handle update in server --> set state for product
  getItemFromArray = (arr, id) => {
    return arr.find((el) => el._id === id);
  };

  handleUpdateProduct = (id, update) => {
    axios
      .put(`/api/products/${id}`, {
        ...update,
      })
      .then(({ data }) => {
        this.setState((prev) => {
          const prevItems = prev.items.filter((item) => item._id !== id);
          const newItems = [...prevItems, data];
          return { items: newItems };
        });
      })
      .catch((err) => console.log(err));
  };

  handleEditProduct = (id, update) => {
    this.handleUpdateProduct(id, update);
  };

  handleItemDecrement = (id, item) => {
    this.handleUpdateProduct(id, { quantity: item.quantity - 1 });
  };

  addItemToCart = (id) => {
    const item = this.getItemFromArray(this.state.items, id);
    this.handleItemDecrement(id, item);

    this.setState((prev) => {
      // const itemFromItems = this.getItemFromArray(prev.items, id)
      // const itemsQty = itemFromItems.quantity - 1;
      // const newItems = [...newCart, newCartItem];
      const itemFromCart = this.getItemFromArray(prev.cartItems, id);
      const cartQty = itemFromCart ? itemFromCart.quantity + 1 : 1;
      const newCartItem = { ...item, ...itemFromCart, quantity: cartQty };
      const newCart = prev.cartItems.filter((item) => item._id !== id);
      return { cartItems: [...newCart, newCartItem] };
    });
  };

  render() {
    return (
      <div id="app">
        <header>
          <h1>The Shop!</h1>
          <Cart cartItems={this.state.cartItems} />
        </header>
        <main>
          {this.state.items.length > 0 && (
            <ProductList
              items={this.state.items}
              addItem={this.addItemToCart}
              editItem={this.handleEditProduct}
            />
          )}
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
