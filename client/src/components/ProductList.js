import React, { Component } from "react";
import Product from "./Product";
import store from "../store";
import axios from "axios";
import { receiveAllProducts } from "../actions/products";

export default class ProductList extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
    axios.get("/api/products").then(({ data }) => {
      store.dispatch(receiveAllProducts(data));
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="product-listing">
        <h2>Products</h2>
        {store.getState().products.map((product) => (
          <Product key={product._id} {...product} />
        ))}
      </div>
    );
  }
}
