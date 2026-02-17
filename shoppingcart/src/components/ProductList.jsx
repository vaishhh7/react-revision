import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
function ProductList() {
  const dispatch = useDispatch();
  const products = [
    { id: 1, name: "t-shirt", price: 699 },
    { id: 2, name: "dress", price: 899 },
  ];
  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-6 border-b border-black pb-2">
        {" "}
        Products
      </h1>
      {products.map((p) => (
        <div
          key={p.id}
          className="bg-[#fde2e4] border border-black rounded-2xl p-6 w-48 shadow-sm"
        >
          <h2 className="text-lg font-medium">{p.name}</h2>
          <p className="mb-4">Rs {p.price}</p>
          {p.name} Rs{p.price}
          <button
            className="bg-white border border-black px-3 py-1 rounded-x1 hover:bg-[#e2ece9] transition"
            onClick={() => dispatch(addToCart(p))}
          >
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
}
export default ProductList;
