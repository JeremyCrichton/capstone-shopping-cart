import React, { useState } from "react";
<<<<<<< HEAD
import axios from 'axios'
import store from "../store";
import { EDIT_PRODUCT } from '../actions/products'

const EditProduct = ({
  id,
  title,
  price,
  quantity,
  // onEditSubmit,
  hideEditProduct,
}) => {
=======
import { receiveAllProducts } from "../actions/products";
import axios from "axios";
import store from "../store";

const EditProduct = ({ _id, title, price, quantity, hideEditProduct }) => {
>>>>>>> 1d7976c6b6ac284a8c8c92a67c2f2c6c6c33e15a
  const [newTitle, setNewTitle] = useState(title);
  const [newPrice, setNewPrice] = useState(price);
  const [newQuantity, setNewQuantity] = useState(quantity);

  const onEditSubmit = (item) => {
    axios
      .put(`/api/products/${id}`, item)
      .then(({ data }) => {
        store.dispatch({ type: EDIT_PRODUCT, payload: data })
        hideEditProduct()
      })
      .catch((err) => console.log(err))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedItem = {
      _id: id,
      title: newTitle,
      price: newPrice,
      quantity: newQuantity,
    };
    if (newTitle && newPrice && newQuantity) {
<<<<<<< HEAD
      onEditSubmit(updatedItem);
=======
      console.log(_id, updatedItem);
      axios.put(`/api/products/${_id}`, updatedItem).then(() => {
        hideEditProduct();
        axios.get("/api/products").then(({ data }) => {
          store.dispatch(receiveAllProducts(data));
        });
      });
>>>>>>> 1d7976c6b6ac284a8c8c92a67c2f2c6c6c33e15a
    }
  };

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="product-name">{title}</label>
          <input
            type="text"
            id="product-name"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">{price}</label>
          <input
            type="text"
            id="product-price"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">{quantity}</label>
          <input
            type="text"
            id="product-quantity"
            value={newQuantity}
            onChange={(e) => setNewQuantity(e.target.value)}
          />
        </div>

        <div className="actions form-actions">
          {/* <a href="#!" className="button">
            Update
          </a> */}
          <input type="submit" className="button" value="Update" />
          <a onClick={hideEditProduct} href="#!" className="button">
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
