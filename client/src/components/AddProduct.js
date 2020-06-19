import React, { Component } from "react";
import store from "../store";
import { addProduct, receiveAllProducts } from "../actions/products";
import axios from "axios";

export default class AddProduct extends Component {
  state = {
    title: "",
    price: "",
    quantity: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/products", this.state).then(() => {
      axios.get("/api/products").then(({ data }) => {
        store.dispatch(receiveAllProducts(data));
      });
      this.handleClearForm();
    });
  };

  handleClearForm = () => {
    this.setState({ title: "", price: "", quantity: "" });
  };

  render() {
    return (
      <div className="add-form visible">
        <p>
          <a href="!#" className="button add-product-button">
            Add A Product
          </a>
        </p>
        <h3>Add Product</h3>
        <form>
          <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input
              name="title"
              type="text"
              id="product-name"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input
              name="price"
              type="text"
              id="product-price"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input
              name="quantity"
              type="text"
              id="product-quantity"
              value={this.state.quantity}
              onChange={this.handleChange}
            />
          </div>

          <div className="actions form-actions">
            <a href="!#" className="button" onClick={this.handleSubmit}>
              Add
            </a>
            <a onClick={this.handleClearForm} href="!#" className="button">
              Cancel
            </a>
          </div>
        </form>
      </div>
    );
  }
}
