import React, { Component } from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import axios from "axios";
import store from '../store';


class App extends Component {
  // state = {
  //   items: [],
  //   cartItems: [],
  // };

  componentDidMount() {
    // store.dispatch({type: "REQU"})
    // this.getAllProducts();
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
          console.log(prev)
          return;

          // const prevItems = prev.items.filter((item) => item._id !== id); // TODO: use map not filter
          // const newItems = [...prevItems, data];
          // return { items: sortArrayAlphabetically(newItems) };
        });
      })
      .catch((err) => console.log(err));
  };

  // handleEditProduct = (id, update) => {
  //   this.handleUpdateProduct(id, update);
  // };

  handleItemDecrement = (id, item) => {
    this.handleUpdateProduct(id, { quantity: item.quantity - 1 });
  };

  addProduct = (item) => {
    axios
      .post(`/api/products`, item)
      .then(() => {
        this.getAllProducts();
      })
      .catch((err) => console.log(err));
  };

  deleteProduct = (_id) => {
    axios
      .delete(`/api/products/${_id}`)
      .then(() => {
        this.getAllProducts();
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
          <Cart />
        </header>
        <main>
          <ProductList />
          {/* {this.state.items.length > 0 && (
            <ProductList
            addItem={this.addItemToCart}
            onEditSubmit={this.handleEditProduct}
            deleteItem={this.deleteProduct}
            />
          )} */}
          {/* <AddProduct addProduct={this.addProduct} /> */}
          <AddProduct />
        </main>
      </div>
    );
  }
}

export default App;
