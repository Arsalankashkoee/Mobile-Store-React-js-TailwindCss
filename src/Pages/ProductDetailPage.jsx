import { useParams } from "react-router-dom";
import { products } from "../data";
import {
  IoShieldCheckmarkOutline,
  IoHomeOutline,
  IoCartOutline,
} from "react-icons/io5";
import { AiOutlineCar } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdOutlinePriceCheck } from "react-icons/md";
import { toast } from "react-toastify";
import { useCart, useCartActions } from "../Context/CartProvider";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { cart } = useCart();
  const dispatch = useCartActions();

  const selectedProduct = products.find(
    (product) => product.id === parseInt(id)
  );

  const { name, price, image } = selectedProduct;

  const addToCart = (selectedProduct) => {
    dispatch({ type: "ADD_TO_CART", payload: selectedProduct });
    toast.success(`${selectedProduct.name} added to cart successfully !`);
  };

  const CheckInCart = (cart, selectedProduct) => {
    return cart.find((c) => c.id === selectedProduct.id);
  };

  return (
    <section className="container flex flex-col lg:flex-row items-start justify-between">
      <div className="flex w-full lg:w-1/2 shadow-lg border border-gray-300 rounded-lg">
        {/* img */}
        <section className="w-60 h-60 lg:w-80 lg:h-80 ">
          <div className="w-full h-full bg-white rounded-tl-lg rounded-bl-lg p-5">
            <img src={image} alt="" className="w-full h-full object-contain" />
          </div>
        </section>

        {/* info */}
        <section className="bg-white p-5 w-full h-auto rounded-tr-lg rounded-br-lg text-sm lg:text-base ">
          <h2 className="text-lg font-semibold mb-5">{name}</h2>
          <div className="mb-2">
            <span className="text-slate-500">Display :</span>
            <span className="font-medium"> 6.1</span>
          </div>
          <div className="mb-2">
            <span className="text-slate-500">networks :</span>
            <span className="font-medium"> 2G، 3G، 4G، 5G</span>
          </div>
          <div className="mb-2">
            <span className="text-slate-500">Battery :</span>
            <span className="font-medium"> 3687 mA</span>
          </div>
          <div className="mb-2">
            <span className="text-slate-500"> screen :</span>
            <span className="font-medium"> Super Retina XDR OLED</span>
          </div>
        </section>
      </div>

      {/* seller */}
      <section className="bg-gray-200 w-full lg:w-1/2 h-80 mt-7 lg:mt-0  lg:ml-7 p-5 rounded-lg shadow-lg border border-gray-300 text-sm lg:text-base">
        <div className=" mb-7 flex">
          <div className="flex items-center">
            <span className="">
              <IoHomeOutline className="w-6 h-6" />
            </span>
            <span className="mx-2 font-medium">Seller : </span>
          </div>
          <span className="">Arsalan Shopping</span>
        </div>

        <div className="mb-7 flex">
          <div className="flex items-center">
            <span className="">
              <IoShieldCheckmarkOutline className="w-6 h-6" />
            </span>
            <span className="mx-2 font-medium">Gaurantee : </span>
          </div>
          <span className="">18 months Golden Service</span>
        </div>
        <div className="mb-20 flex">
          <div className="flex items-center">
            <span className="">
              <AiOutlineCar className="w-6 h-6" />
            </span>
            <span className="mx-2 font-medium">Posted by : </span>
          </div>
          <span className="">Tehran warehouse</span>
        </div>
        {/* price */}
        <div className=" flex items-center">
          <span>
            <MdOutlinePriceCheck className="w-6 h-6" />
          </span>
          <span className="mx-2 font-medium">Price : </span>
          <span className="font-semibold">{price}</span>
          <span className="">
            <BsCurrencyDollar />
          </span>
        </div>
        <button
          onClick={() => addToCart(selectedProduct)}
          className={
            CheckInCart(cart, selectedProduct)
              ? "text-white bg-gradient-to-l from-purp to-viol w-full p-2 flex items-center justify-center rounded-md mt-5 opacity-50"
              : "text-white bg-gradient-to-l from-purp to-viol w-full p-2 flex items-center justify-center rounded-md mt-5"
          }
          disabled={CheckInCart(cart, selectedProduct) ? true : false}
        >
          <span>
            <IoCartOutline className="w-6 h-6 mr-3" />
          </span>
          <span>
            {CheckInCart(cart, selectedProduct) ? "In Cart" : "Add To Cart"}
          </span>
        </button>
      </section>
    </section>
  );
};

export default ProductDetailPage;
