import { useRef } from "react";
import CartModal from "./CartModal";

export default function Header({ cart, onAddItem, onRemoveItem }) {
  const modalRef = useRef();
  const cartItems = [...cart.items];
  const totalCartItems = cartItems.reduce((currVal, item) => {
    return currVal + item.qty;
  }, 0);

  function handleCartModalOpenClick() {
    modalRef.current.open();
  }

  return (
    <header className="flex justify-between items-center">
      <CartModal
        ref={modalRef}
        cart={cart}
        onAddItem={onAddItem}
        onRemoveItem={onRemoveItem}
      />
      <div className="flex justify-center items-center gap-4">
        <img src="logo.png" alt="logo" className="h-20 w-20" />
        <h2 className="uppercase text-3xl font-bold text-amber-500">
          Elegand Context
        </h2>
      </div>
      <button
        className="bg-amber-500 h-10 w-28 rounded-md"
        onClick={handleCartModalOpenClick}
      >
        Cart : {totalCartItems}
      </button>
    </header>
  );
}
