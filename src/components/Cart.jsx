export default function Cart({ cart, onAddItem, onRemoveItem }) {
  return (
    <div className="">
      <h2 className="text-4xl">Cart Items</h2>
      <ul className="mt-10 ">
        {cart.items.length > 0
          ? cart.items.map((item) => {
              return (
                <li className="flex flex-row justify-between items-center mt-3">
                  <div className="text-2xl">{item.title}</div>
                  <span className="flex  flex-row gap-10 items-center">
                    <button
                      className="p-1 rounded-lg bg-amber-700 text-white text-2xl"
                      onClick={(e) => onAddItem(e, item.id)}
                    >
                      +
                    </button>
                    <p>{item.qty}</p>
                    <button
                      className="p-1 rounded-lg bg-amber-700 text-white text-2xl"
                      onClick={(e) => onRemoveItem(e, item.id)}
                    >
                      -
                    </button>
                  </span>
                </li>
              );
            })
          : "No items yet. Add Items"}
      </ul>
    </div>
  );
}
