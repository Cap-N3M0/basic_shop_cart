import { DUMMY_PRODUCTS } from "../dummy-products";
import Product from "./Product";

export default function Shop({ onAddToCart }) {
  return (
    <section className="flex flex-col gap-10 my-20">
      <h2 className="text-xl text-yellow-600 font-bold">
        Elegant clothing for everyone
      </h2>
      <ul className="flex flex-wrap gap-10">
        {DUMMY_PRODUCTS.map((product) => {
          return (
            <Product
              item={product}
              onAddToCart={onAddToCart}
              key={product.id}
            />
          );
        })}
      </ul>
    </section>
  );
}
