import React, { Component } from 'react';

class AddProductForm extends Component {
  render() {
    return (
      <div class="add-form visible">
        <p><a class="button add-product-button">Add A Product</a></p>
        <h3>Add Product</h3>
        <form>
          <div class="input-group">
            <label for="product-name">Product Name</label>
            <input type="text" id="product-name" value="" />
          </div>

          <div class="input-group">
            <label for="product-price">Price</label>
            <input type="text" id="product-price" value="" />
          </div>

          <div class="input-group">
            <label for="product-quantity">Quantity</label>
            <input type="text" id="product-quantity" value="" />
          </div>

          <div class="actions form-actions">
            <a class="button">Add</a>
            <a class="button">Cancel</a>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProductForm;
