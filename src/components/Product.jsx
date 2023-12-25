export default function Product({ item, onAddToCart }) {
  return (
    <li className="w-[20rem] bg-amber-900" key={item.id}>
      <img src={item.image} alt={item.title} className="" />
      <div className="flex flex-col justify-between h-[24rem]">
        <div className="flex flex-col p-4 gap-5">
          <h3 className="text-xl text-slate-300">{item.title}</h3>
          <p>${item.price}</p>
          <p className="text-justify">{item.description}</p>
        </div>
        <p className="self-end m-5">
          <button
            className="bg-yellow-700 rounded-md px-3 py-1"
            onClick={(e) => onAddToCart(e, item.id)}
          >
            Add to Cart
          </button>
        </p>
      </div>
    </li>
  );
}
