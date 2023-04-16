import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log('cartItems: ', cartItems);
  const dispatch = useDispatch();
  const handdleClear = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <h1 className="font-bold text-2xl p-5 m-2">{cartItems.length} Items</h1>
      <button
        className="p-2 bg-green-100"
        onClick={() => {
          handdleClear();
        }}
      >
        Clear Cart
      </button>
      <div className="flex shadow-lg bg-pink-50 px-4 my-5">
        <ul>
        {cartItems.map((item) => (
        <li className="p-1 text-lg">{item}</li>
        ))}
        </ul>
      </div>
    </>
  );
};

export default Cart;
