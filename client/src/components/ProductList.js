import React, { Component } from 'react'
import Product from "./Product"
import store from '../store'
import axios from 'axios'
import * as product from '../actions/products'
import { sortArrayAlphabetically } from '../utils/helpers'

export default class ProductList extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
    axios
      .get("/api/products")
      .then(({ data }) => {
        const newData = sortArrayAlphabetically(data).map(item =>
          ({ ...item, id: item._id })
        )
        store.dispatch(product.receiveAllProducts(newData))
      })
  }

  componentWillUnmount() {
    this.unsubscribe()
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
