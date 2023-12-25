export default function Header({ cart }) {
  const cartItems = [...cart.items];
  const totalCartItems = cartItems.reduce((currVal, item) => {
    return currVal + item.qty;
  }, 0);

  return (
    <header className="flex justify-between items-center">
      <div className="flex justify-center items-center gap-4">
        <img src="logo.png" alt="logo" className="h-20 w-20" />
        <h2 className="uppercase text-3xl font-bold text-amber-500">
          Elegand Context
        </h2>
      </div>
      <button className="bg-amber-500 h-10 w-28 rounded-md">
        Cart : {totalCartItems}
      </button>
    </header>
  );
}
