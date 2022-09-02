import { useCart, useCartActions } from "../Context/CartProvider";
import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";

const CartPage = () => {
  const cartState = useCart();
  //   const {cart,total} = useCart();

  const dispatch = useCartActions();

  const incrementHandler = (cart) => {
    dispatch({ type: "ADD_TO_CART", payload: cart });
  };
  const decrementHandler = (cart) => {
    dispatch({ type: "DECREMENT_PRODUCT", payload: cart });
  };

  // there is not any product
  if (!cartState.cart.length)
    return (
      <main className=" bg-red-100 p-3 text-center rounded-lg shadow-lg w-full  ">
        <p className="container flex flex-col">
          <span>No item in cart</span>
          <Link to="/" className="mt-3 hover:text-violet-500">
            Go to home page ...
          </Link>
        </p>
      </main>
    );

  return (
    <main className="container flex flex-col md:flex-row items-start justify-start  gap-7">
      {/* cart detail */}
      <section className="w-full md:w-2/3 flex flex-col gap-5">
        {cartState.cart.map((cart) => {
          return (
            <section
              key={cart.id}
              className="rounded-lg overflow-hidden bg-white flex border border-gray-300 shadow-lg"
            >
              <div className="w-1/4 h-20 py-2">
                <img
                  src={cart.image}
                  alt={cart.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="py-4 px-5 w-full flex items-center justify-between gap-7 ml-5 ">
                <div className="flex flex-col justify-center gap-3 text-sm font-semibold md:font-normal md:text-base">
                  <p className="flex flex-col md:flex-row">
                    <span> {cart.name}</span>
                  </p>
                  <p className="flex items-center">
                    Price : {cart.offPrice * cart.quantity}
                    <span>
                      <BsCurrencyDollar />
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <button
                    className="border border-violet-600 py-1 px-2 rounded-md bg-violet-100"
                    onClick={() => incrementHandler(cart)}
                  >
                    +
                  </button>
                  <span className="border border-violet-600 py-1 px-2 rounded-md bg-violet-50">
                    {cart.quantity}
                  </span>
                  <button
                    className={
                      cart.quantity === 1
                        ? "border border-red-600 p-1 rounded-md"
                        : "border border-violet-600 py-1 px-2 rounded-md"
                    }
                    onClick={() => decrementHandler(cart)}
                  >
                    {cart.quantity === 1 ? (
                      <FiTrash2 className="text-red-500 w-5 h-5 my-1" />
                    ) : (
                      "-"
                    )}
                  </button>
                </div>
              </div>
            </section>
          );
        })}
      </section>
      {/* cart summary */}
      <CartSummary />
    </main>
  );
};

export default CartPage;

// cart summary component
const CartSummary = () => {
  const { cart } = useCart();
  // console.log(cart);

  const orginalTotalPrice = cart.length
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    : 0;

  const Total = cart.length
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.offPrice, 0)
    : 0;

  return (
    <section className="w-full md:w-1/3 text-sm md:text-base h-auto rounded-lg overflow-hidden bg-white border border-gray-300 shadow-lg sticky top-24 py-4 px-5">
      <h2 className="font-semibold  text-lg border-b border-b-gray-300 pb-2">
        cart summary
      </h2>
      <div className="border-b border-b-gray-200 pb-5">
        <div className="flex items-center justify-between mt-5">
          <div className="">products price</div>
          <div className="flex items-center">
            {orginalTotalPrice}
            <span>
              <BsCurrencyDollar />
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-5">
          <div className="">Cart Discount</div>
          <div className="flex items-center">
            {orginalTotalPrice - Total}
            <span>
              <BsCurrencyDollar />
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-5">
        <div className="font-semibold">Total Price</div>
        <div className="font-semibold flex items-center">
          {Total}
          <span>
            <BsCurrencyDollar />
          </span>
        </div>
      </div>

      <Link to={{ pathname: "/login", search: "redirect=checkout" }}>
        <button className="w-full text-white bg-gradient-to-l from-purp to-viol  mt-7 py-2 rounded-lg ">
          Go to checkout
        </button>
      </Link>
    </section>
  );
};
