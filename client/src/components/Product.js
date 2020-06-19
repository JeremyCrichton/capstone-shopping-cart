import React, { Component } from "react";
import EditProductContainer from "./EditProductContainer";

export default class Product extends Component {
  state = {
    toggleEditProduct: false,
  };

  setToggleEditProduct = (value) => {
    this.setState((prevState) => {
      return { toggleEditProduct: !prevState.toggleEditProduct };
    });
  };

  handleEditButton = (e) => {
    e.preventDefault();
    this.setToggleEditProduct(!this.state.toggleEditProduct);
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
                className={`button add-to-cart ${quantity <= 0 && "disabled"}`}
                onClick={this.props.handleAddItemToCart}
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
            onClick={this.props.handleDeleteItem}
            href="!#"
            className="delete-button"
          >
            <span>X</span>
          </a>
        </div>
        {this.state.toggleEditProduct && (
          <EditProductContainer
            hideEditProduct={() => this.setToggleEditProduct(false)}
            {...this.props}
          />
        )}
      </div>
    );
  }
}
