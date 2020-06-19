import React, { Component } from "react";
import ProductContainer from "./ProductContainer";
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
          <ProductContainer key={product._id} {...product} />
        ))}
      </div>
    );
  }
}
