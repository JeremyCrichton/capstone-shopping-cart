import React from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";

/**
 * Shop
 *  - Cart
 *  - Products
 *   - EditableProduct
 *     - Product
 *     - EditProductForm
 * - AddProduct
 *   - AddProductForm
 */

const App = () => {
  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart />
      </header>
      <main>
        <ProductList />
        <AddProduct />
      </main>
    </div>
  );
};

export default App;
