import { createPortal } from "react-dom";
import Cart from "./Cart";
import { forwardRef, useImperativeHandle, useRef } from "react";

const CartModal = forwardRef(({ cart, onAddItem, onRemoveItem }, ref) => {
  const dialogueRef = useRef();

  useImperativeHandle(ref, () => {
    return { open: () => dialogueRef.current.showModal() };
  });

  return createPortal(
    <dialog ref={dialogueRef} className="bg-gray-100 p-10 w-2/3">
      <form method="dialog">
        <Cart cart={cart} onAddItem={onAddItem} onRemoveItem={onRemoveItem} />
        <button className="mt-10" id="close">
          Close
        </button>
      </form>
    </dialog>,
    document.getElementById("root-modal")
  );
});

export default CartModal;
