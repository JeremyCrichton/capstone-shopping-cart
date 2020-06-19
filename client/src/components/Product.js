import React, { Component } from "react";
import EditProduct from "./EditProduct";
import store from "../store";
import { ADD_TO_CART } from "../actions/cart";
import { receiveAllProducts } from "../actions/products";
import axios from "axios";

export default class Product extends Component {
  state = {
    toggleEditProduct: false,
  };

  setToggleEditProduct = (value) => {
    this.setState((prevState) => {
      return { toggleEditProduct: !prevState.toggleEditProduct };
    });
  };

  handleAddItemToCart = (e) => {
    e.preventDefault();
    const product = {
      _id: this.props._id,
      title: this.props.title,
      quantity: this.props.quantity - 1,
      price: this.props.price,
    };
    console.log(product)
    axios.put(`/api/products/${this.props._id}`, product).then((res) => {
      // store.dispatch(addToCart({ ...data.data, id: data.data._id }));
      store.dispatch({ type: ADD_TO_CART, payload: res.data })
    });
  };

  handleEditButton = (e) => {
    e.preventDefault();
    this.setToggleEditProduct(!this.state.toggleEditProduct);
  };

  handleDeleteItem = (e) => {
    e.preventDefault();
    const id = this.props._id;
    // probably want to move this to the reducers
    axios.delete(`/api/products/${id}`).then((_) => {
      axios.get("/api/products").then(({ data }) => {
        store.dispatch(receiveAllProducts(data));
      });
    });
  };

  render() {
    const { title, quantity, price } = this.props;
    return (
      <div className="product">
        <div className="product-details">
          <h3>{title}</h3>
          <p className="price">${Number(price).toFixed(2)}</p>
          <p className="quantity">{quantity} left in stock</p>
          {!this.state.toggleEditProduct && (
            <div className="actions product-actions">
              <a
                href="!#"
                className={`button add-to-cart ${quantity === 0 && "disabled"}`}
                onClick={this.handleAddItemToCart}
              >
                Add to Cart
              </a>
              <a
                href="!#"
                className="button edit"
                onClick={this.handleEditButton}
              >
                Edit
              </a>
            </div>
          )}
          <a
            onClick={this.handleDeleteItem}
            href="!#"
            className="delete-button"
          >
            <span>X</span>
          </a>
        </div>
        {this.state.toggleEditProduct && (
          <EditProduct
            // onEditSubmit={handleEditSubmit}
            hideEditProduct={() => this.setToggleEditProduct(false)}
            {...this.props}
          />
        )}
      </div>
    );
  }
}
