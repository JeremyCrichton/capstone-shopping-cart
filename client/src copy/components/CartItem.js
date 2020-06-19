import React from "react";

export default function CartItem({ title, quantity, price }) {
  return (
    <tr>
      <td>{title}</td>
      <td>{quantity}</td>
      <td>${Number(price * quantity).toFixed(2)}</td>
    </tr>
  );
}
