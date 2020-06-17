import React, { Component } from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import axios from "axios";

import { sortArrayAlphabetically } from "../utils/helpers";

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
      .then(({ data }) => {
        this.setState({ items: sortArrayAlphabetically(data) });
      })
      .catch((err) => console.log(err));
  }

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
          const prevItems = prev.items.filter((item) => item._id !== id); // TODO: use map not filter
          const newItems = [...prevItems, data];
          return { items: sortArrayAlphabetically(newItems) };
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
      const itemFromCart = this.getItemFromArray(prev.cartItems, id);
      const cartQty = itemFromCart ? itemFromCart.quantity + 1 : 1;
      const newCartItem = { ...item, ...itemFromCart, quantity: cartQty };
      const newCart = prev.cartItems.filter((item) => item._id !== id); // TODO: if !itemFromCart, concat to cart arr, otherwise map and change item in arry
      return { cartItems: sortArrayAlphabetically([...newCart, newCartItem]) };
    });
  };

  addProduct = (item) => {
    axios
      .post(`/api/products`, item)
      .then(() => {
        this.getAllItems();
      })
      .catch((err) => console.log(err));
  };

  deleteProduct = (_id) => {
    axios
      .delete(`/api/products/${_id}`)
      .then(() => {
        this.getAllItems();
      })
      .catch((err) => console.log(err));
  };
  handleEmptyCart = () => {
    this.setState({ cartItems: [] });
  };
  // "onAddItem", "handleAddItem"
  render() {
    return (
      <div id="app">
        <header>
          <h1>The Shop!</h1>
          <Cart
            cartItems={this.state.cartItems}
            onEmptyCart={this.handleEmptyCart}
          />
        </header>
        <main>
          {this.state.items.length > 0 && (
            <ProductList
              items={this.state.items}
              addItem={this.addItemToCart}
              onEditSubmit={this.handleEditProduct}
              deleteItem={this.deleteProduct}
            />
          )}
          <AddProduct addProduct={this.addProduct} />
        </main>
      </div>
    );
  }
}

export default App;
