import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";
import { useCart } from "../Context/CartProvider";
import { BsCurrencyDollar } from "react-icons/bs";

const CheckOut = () => {
  const auth = useAuth();
  const { cart } = useCart();

  const Total = cart.length
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.offPrice, 0)
    : 0;

  if (!cart.length)
    return (
      <main className="bg-violet-100 p-2 hover:text-violet-600">
        <div className="container flex items-center justify-center ">
          <Link to="/">Go to shopping</Link>
        </div>
      </main>
    );

  return (
    <main className="">
      <section className="container ">
        <div className="flex flex-col md:flex-row items-start justify-start gap-7">
          {auth ? (
            <>
              {/* User data */}
              <div className="w-full md:w-2/3 bg-white px-5 py-3 rounded-lg shadow-lg border border-gray-300 text-sm lg:text-base">
                <h2 className="font-semibold text-lg mb-5 border-b border-b-gray-300 pb-2">
                  Checkout details
                </h2>
                <p className="mb-1">Name : {auth.name}</p>
                <p className="mb-1">Email : {auth.email}</p>
                <p className="mb-1">Phone Number : {auth.phoneNumber}</p>
              </div>

              {/* Cart Data */}
              <div className="w-full md:w-1/3 bg-white px-5 py-3 rounded-lg shadow-lg border border-gray-300 text-sm lg:text-base">
                <h2 className="font-semibold  text-lg border-b border-b-gray-300 pb-2 mb-5">
                  cart summary
                </h2>
                {cart.map((c) => {
                  return (
                    <div
                      key={c.id}
                      className="flex items-center justify-between mb-3"
                    >
                      <p className="">
                        {c.name} * {c.quantity}
                      </p>
                      <p className="flex items-center">
                        {c.quantity * c.offPrice}{" "}
                        <span>
                          <BsCurrencyDollar />
                        </span>
                      </p>
                    </div>
                  );
                })}
                <div className="flex items-center justify-between border-t border-t-gray-200 pt-5">
                  <span>Total :</span>
                  <span className="flex items-center">
                    {Total}
                    <span>
                      <span>
                        <BsCurrencyDollar />
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </>
          ) : (
            <main className="bg-violet-100 p-2 hover:text-violet-600">
              <div className="container flex items-center justify-center">
                <Link to="/login">Please Login</Link>
              </div>
            </main>
          )}
        </div>
        <button
          className={
            auth
              ? "text-white bg-gradient-to-l from-purp to-viol w-full rounded-md mt-16 py-2"
              : "hidden"
          }
        >
          Order
        </button>
      </section>
    </main>
  );
};

export default CheckOut;
