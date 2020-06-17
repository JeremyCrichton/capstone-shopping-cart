import React from "react";

export default function CartItem({ item, quantity, price }) {
  return (
    <tr>
      <td>{item}</td>
      <td>{quantity}</td>
      <td>{price}</td>
    </tr>
  );
}
