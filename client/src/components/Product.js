import React, { useState } from "react";
import EditProduct from "./EditProduct";

export default function Product({
  _id,
  title,
  quantity,
  price,
  addItem,
  onEditSubmit,
  deleteItem,
}) {
  const [toggleEditProduct, setToggleEditProduct] = useState(false);

  const handleAddItem = (event) => {
    event.preventDefault();
    addItem(_id); // TODO onAddItem
  };

  const handleEditItem = (event) => {
    event.preventDefault();
    setToggleEditProduct(!toggleEditProduct);
    // renderEdit();
  };

  const handleDeleteItem = (e) => {
    e.preventDefault();
    deleteItem(_id);
  };

  const handleEditSubmit = (id, item) => {
    onEditSubmit(id, item);
    setToggleEditProduct(!toggleEditProduct);
  };

  return (
    <div className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <p className="quantity">{quantity} left in stock</p>
        {!toggleEditProduct && (
          <div className="actions product-actions">
            <a
              href="!#"
              className={`button add-to-cart ${quantity === 0 && "disabled"}`}
              onClick={handleAddItem}
            >
              Add to Cart
            </a>
            <a href="!#" className="button edit" onClick={handleEditItem}>
              Edit
            </a>
          </div>
        )}
        <a onClick={handleDeleteItem} href="!#" className="delete-button">
          <span>X</span>
        </a>
      </div>
      {toggleEditProduct && (
        <EditProduct
          id={_id}
          title={title}
          price={price}
          quantity={quantity}
          onEditSubmit={handleEditSubmit}
          hideEditProduct={() => setToggleEditProduct(false)}
        />
      )}
    </div>
  );
}
