import { products } from "../data";
import { IoCartOutline } from "react-icons/io5";
import { useCart, useCartActions } from "../Context/CartProvider";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { BsCurrencyDollar } from "react-icons/bs";

// if product was in cart then the text of button change to "In Cart" instead of "Add To Cart"
const CheckInCart = (cart, product) => {
  return cart.find((c) => c.id === product.id);
};

const HomePage = () => {
  const { cart } = useCart();
  const dispatch = useCartActions();

  const addProductHandler = (product) => {
    // console.log(product);
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast.success(`${product.name} added to cart successfully !`);
  };

  return (
    <main className="">
      {/* product-list */}
      <section className="container grid grid-cols-auto-fit gap-11">
        {products.map((product) => {
          return (
            // product
            <section
              key={product.id}
              className="rounded-lg overflow-hidden bg-white border border-gray-200 shadow-lg"
            >
              <Link to={`product/${parseInt(product.id)}`}>
                <div className="bg-gray-200 h-60">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex items-center justify-between bg-slate-50 py-4 px-5">
                  <p>Name : {product.name}</p>
                  <p className="flex items-center">
                    Price : {product.price}
                    <span>
                      <BsCurrencyDollar />
                    </span>
                  </p>
                </div>
              </Link>
              <button
                className={
                  CheckInCart(cart, product)
                    ? "text-white bg-gradient-to-l from-purp to-viol w-full p-2 flex items-center justify-center opacity-50"
                    : "text-white bg-gradient-to-l from-purp to-viol w-full p-2 flex items-center justify-center"
                }
                onClick={() => addProductHandler(product)}
                disabled={CheckInCart(cart, product) ? true : false}
              >
                <IoCartOutline className="w-6 h-6 mr-3" />
                <span>
                  {CheckInCart(cart, product) ? "In Cart" : "Add To Cart"}
                </span>
              </button>
            </section>
          );
        })}
      </section>
    </main>
  );
};

export default HomePage;
