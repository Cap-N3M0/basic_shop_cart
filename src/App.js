import Header from "./components/Header";
import Shop from "./components/Shop";
import { DUMMY_PRODUCTS } from "./dummy-products";

import "./App.css";
import { useState } from "react";

function App() {
  const [shopCart, setShopCart] = useState({ items: [] });

  function handleAddToCart(e, productId) {
    e.preventDefault();
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

  function handleRemoveFromCart(e, productId) {
    e.preventDefault();
    setShopCart((prevShopCart) => {
      const existingShopCart = [...prevShopCart.items];
      let newShopCartList;

      const existingShopCartIndex = existingShopCart.findIndex((item) => {
        return item.id === productId;
      });

      const existingShopCartItem = existingShopCart[existingShopCartIndex];

      if (existingShopCartItem) {
        if (existingShopCartItem.qty === 1) {
          newShopCartList = existingShopCart.filter(
            (item) => item.id !== productId
          );
          return { items: newShopCartList };
        } else if (existingShopCartItem.qty > 1) {
          const updatedItem = {
            ...existingShopCartItem,
            qty: existingShopCartItem.qty - 1,
          };

          existingShopCart[existingShopCartIndex] = updatedItem;
          return { items: existingShopCart };
        }
      }
    });
  }

  return (
    <>
      <main className="p-28 bg-amber-900 min-w-[550px]">
        <Header
          cart={shopCart}
          onAddItem={handleAddToCart}
          onRemoveItem={handleRemoveFromCart}
        />
        <Shop onAddToCart={handleAddToCart} />
      </main>
    </>
  );
}

export default App;
