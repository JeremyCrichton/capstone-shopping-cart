import React from "react";

export default function ProductList() {
  return (
    <div class="product-listing">
      <h2>Products</h2>
      <div class="product">
        <div class="product-details">
          <h3>Amazon Kindle E-reader</h3>
          <p class="price">$79.99</p>
          <p class="quantity">5 left in stock</p>
          <div class="actions product-actions">
            <a class="button add-to-cart">Add to Cart</a>
            <a class="button edit">Edit</a>
          </div>
          <a class="delete-button">
            <span>X</span>
          </a>
        </div>
      </div>

      <div class="product">
        <div class="product-details">
          <h3>Apple 10.5-Inch iPad Pro</h3>
          <p class="price">$649.99</p>
          <p class="quantity">2 left in stock</p>
          <div class="actions product-actions">
            <a class="button add-to-cart">Add to Cart</a>
            <a class="button edit">Edit</a>
          </div>
          <a class="delete-button">
            <span>X</span>
          </a>
        </div>
      </div>

      <div class="product">
        <div class="product-details">
          <h3>Yamaha Portable Keyboard</h3>
          <p class="price">$155.99</p>
          <p class="quantity">0 left in stock</p>
          <div class="actions product-actions">
            <a class="button add-to-cart disabled">Add to Cart</a>
            <a class="button edit">Edit</a>
          </div>
          <a class="delete-button">
            <span>X</span>
          </a>
        </div>
      </div>
    </div>
  );
}
