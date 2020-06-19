import React, { Component } from 'react'
import EditProduct from "./EditProduct";
import store from "../store"
import { addToCart } from "../actions/cart"
import { EDIT_PRODUCT, DELETE_PRODUCT } from '../actions/products'
import axios from 'axios'

export default class Product extends Component {
  state = {
    toggleEditProduct: false,
  }

  setToggleEditProduct = (value) => {
    this.state.toggleEditProduct = value
  }

  handleAddItemToCart = (e) => {
    e.preventDefault();
    const product = {
      _id: this.props.id,
      title: this.props.title,
      quantity: this.props.quantity - 1,
      price: this.props.price,
    }
    axios.put(`/api/products/${this.props.id}`, product)
      .then((data) => {
        store.dispatch(addToCart({ ...data.data, id: data.data._id }))
      }
      )
  };

  handleEditButton = (e) => {
    e.preventDefault();
    this.setToggleEditProduct(!this.state.toggleEditProduct);
  };

  handleDeleteItem = (e) => {
    e.preventDefault();
    const id = this.props.id;
    axios.delete(`/api/products/${id}`).then((_) => {
      store.dispatch({ type: DELETE_PRODUCT, payload: id })
    })
  };

  render() {
    // const [toggleEditProduct, setToggleEditProduct] = useState(false)
    this.state.product = this.props.product
    const { title, quantity, price } = this.props
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
              <a href="!#" className="button edit" onClick={this.handleEditButton}>
                Edit
              </a>
            </div>
          )}
          <a onClick={this.handleDeleteItem} href="!#" className="delete-button">
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


// export default function Product({ product }) {
//   const [toggleEditProduct, setToggleEditProduct] = useState(false);

//   const { title, price, quantity } = product;



//   // const handleEditSubmit = (e) => {
//   //   e.preventDefault()
//   //   store.dispatch({ type: EDIT_PRODUCT, payload: product})
//   //   setToggleEditProduct(!toggleEditProduct);
//   // };


// }
