import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <div className="w-6/12 m-auto">
        {/* Conditional rendering of Clear Cart button */}
        {cartItems.length > 0 && (
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4  hover:bg-blue-700 rounded-lg font-bold"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}

        {cartItems.length === 0 ? (
          <div className="flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl font-bold mb-4">Your cart is empty</p>
              <p className="text-gray-500">Please add some items to your cart.</p>
              {/* Conditional rendering of Add Items button */}
             
              <li className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 cursor-pointer list-none"><Link to="/">Add Items</Link></li>
            </div>
          </div>
        ) : null}

        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
