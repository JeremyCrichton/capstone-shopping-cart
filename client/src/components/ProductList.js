import React from "react";
import Product from "./Product";

export default function ProductList({ items, ...helpers }) {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {items.map((item) => (
        <Product key={item._id} {...helpers} {...item} />
      ))}
    </div>
  );
}
