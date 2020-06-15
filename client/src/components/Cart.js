import React from "react";
import CartItem from "./CartItem";

export default function Cart({ cartItems }) {
  // Add helpers/calculateTotal

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <p>Your cart is empty</p>
      <table class="cart-items">
        {cartItems && (
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        )}
        {cartItems && cartItems.map((item) => <CartItem {...item} />)}
        <tr>
          <td colspan="3" class="total">
            Total: $729.98
          </td>
        </tr>
      </table>
      <a className="button checkout disabled">Checkout</a>
    </div>
  );
}
