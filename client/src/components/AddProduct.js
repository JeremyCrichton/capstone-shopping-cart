import React, { Component } from "react";

export default class AddProduct extends Component {
  state = {
    title: "",
    price: "",
    quantity: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClearForm = () => {
    this.setState({ title: "", price: "", quantity: "" });
  };

  handleClickSubmit = (e) => {
    const product = {
      title: this.state.title,
      price: this.state.price,
      quantity: this.state.quantity,
    };
    this.props.onSubmit(e, product, () => this.handleClearForm());
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
            <a href="!#" className="button" onClick={this.handleClickSubmit}>
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
