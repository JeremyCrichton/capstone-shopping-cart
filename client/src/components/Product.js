import React from "react";

export default function Product({ id, title, quantity, price, addItem }) {
  const handleAddItem = event => {
    event.preventDefault();
    addItem(id);
  };

  return (
    <div className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <a href="!#" className={`button add-to-cart ${quantity === 0 && "disabled"}`} onClick={handleAddItem} >
            Add to Cart
          </a>
          <a href="!#" className="button edit">
            Edit
          </a>
        </div>
        <a href="!#" className="delete-button">
          <span>X</span>
        </a>
      </div>
    </div>
  );
}
