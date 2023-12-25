import Header from "./components/Header";
import Shop from "./components/Shop";
import { DUMMY_PRODUCTS } from "./dummy-products";

import "./App.css";
import { useState } from "react";

function App() {
  const [shopCart, setShopCart] = useState({ items: [] });

  function handleAddToCart(productId) {
    setShopCart((prevShopCart) => {
      const updatedShopCart = [...prevShopCart.items];

      const existingShopCartIndex = updatedShopCart.findIndex(
        (item) => item.id === productId
      );

      const existingShopCartItem = updatedShopCart[existingShopCartIndex];

      if (existingShopCartItem) {
        const updatedItem = {
          ...existingShopCartItem,
          qty: existingShopCartItem.qty + 1,
        };
        updatedShopCart[existingShopCartIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((p) => p.id === productId);

        updatedShopCart.push({
          id: productId,
          title: product.title,
          price: product.price,
          qty: 1,
        });
      }

      return { items: updatedShopCart };
    });
  }

  return (
    <main className="p-28">
      <Header cart={shopCart} />
      <Shop onAddToCart={handleAddToCart} />
    </main>
  );
}

export default App;
