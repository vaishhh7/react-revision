import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../features/cartSlice";
import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  return (
    <div className="p-8 mt-8">
      <h1 className="text-3xl font-semibold mb-6 border-b border-black pb-2">
        Cart
      </h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#e2ece9] border border-black rounded-2xl p-4 flex justify-between items-center"
          >
            <div>
              {item.name} x {item.quantity}
            </div>

            <div className="space-x-2">
              <button
                onClick={() => dispatch(increaseQuantity(item.id))}
                className="bg-white border border-black px-2 rounded-lg"
              >
                +
              </button>

              <button
                onClick={() => dispatch(decreaseQuantity(item.id))}
                className="bg-white border border-black px-2 rounded-lg"
              >
                -
              </button>

              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="bg-[#fcd5ce] border border-black px-3 rounded-lg"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-6 text-xl font-semibold border-t border-black pt-3">
        Total: ₹{total}
      </h2>
    </div>
  );
}
export default Cart;
