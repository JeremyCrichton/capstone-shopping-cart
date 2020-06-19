import React, { useState } from "react";
import { receiveAllProducts } from "../actions/products";
import axios from "axios";
import store from "../store";

const EditProduct = ({ _id, title, price, quantity, hideEditProduct }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newPrice, setNewPrice] = useState(price);
  const [newQuantity, setNewQuantity] = useState(quantity);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedItem = {
      title: newTitle,
      price: newPrice,
      quantity: newQuantity,
    };
    if (newTitle && newPrice && newQuantity) {
      console.log(_id, updatedItem);
      axios.put(`/api/products/${_id}`, updatedItem).then(() => {
        hideEditProduct();
        axios.get("/api/products").then(({ data }) => {
          store.dispatch(receiveAllProducts(data));
        });
      });
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
