import React, { Component } from "react";
import Product from "./Product";
import store from "../store";

export default class ProductList extends Component {
  componentDidMount() {
    this.props.onFetchProducts();
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
