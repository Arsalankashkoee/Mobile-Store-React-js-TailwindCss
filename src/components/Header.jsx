import { NavLink } from "react-router-dom";
import { useCart } from "../Context/CartProvider";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useAuth } from "../Context/AuthProvider";
import logoArsalan from "../Images/LOGO2.png";
import { BiUserCircle } from "react-icons/bi";
import React from "react";
import TemporaryDrawer from "./Drawer";

const Header = () => {
  const { cart } = useCart();
  const userData = useAuth();

  return (
    <React.Fragment >
      <header className="bg-violet-200 shadow-lg p-2 mb-5  sticky top-0 z-10">
        <nav className="container w-full flex items-center justify-between">
          {/* left */}
          <ul className="hidden md:flex md:items-center justify-center gap-11 z-10">
            <li className=" hover:text-violet-600">
              <Link to="/">
                <img
                  className="w-14 h-14 rounded-full border border-gray-300"
                  src={logoArsalan}
                  alt="logo site"
                />
              </Link>
            </li>
            <li className=" hover:text-violet-600">
              <NavLink
                to="/"
                className={(navData) =>
                  navData.isActive
                    ? "text-white bg-violet-600 py-1 px-3 rounded-md shadow-md"
                    : null
                }
              >
                Home
              </NavLink>
            </li>
            <li className=" hover:text-violet-600">
              <NavLink
                to="/blogs"
                className={(navData) =>
                  navData.isActive
                    ? "text-white bg-violet-600 py-1 px-3 rounded-md shadow-md"
                    : null
                }
              >
                Blogs
              </NavLink>
            </li>
            <li className=" hover:text-violet-600">
              <NavLink
                to="/aboutUs"
                className={(navData) =>
                  navData.isActive
                    ? "text-white bg-violet-600 py-1 px-3 rounded-md shadow-md"
                    : null
                }
              >
                About Us
              </NavLink>
            </li>
          </ul>

          {/* hamburger menu */}
          <div className="block md:hidden text-violet-700">
            <TemporaryDrawer />
          </div>

          {/* right */}
          <div className="flex items-center justify-center gap-5">
            <span className="hover:bg-violet-300 rounded-full p-1 flex items-center justify-center relative transition ease-in-out duration-300">
              <Link to="/cart" className="text-violet-700  ">
                <IoCartOutline className="w-7 h-7" />
              </Link>
              <span className="w-5 h-5 bg-red-500 text-white flex items-center justify-center p-1 rounded-full absolute -top-2 -right-2 text-sm ">
                {cart.length}
              </span>
            </span>
            <span className=" ">
              <Link to={userData ? "profile" : "login"}>
                {userData ? (
                  <span className="flex flex-col items-center justify-center">
                    <BiUserCircle className="w-8 h-8 text-violet-700" />
                    <span className="font-normal text-violet-700 text-xs">
                      profile
                    </span>
                  </span>
                ) : (
                  "Login/SignUp"
                )}
              </Link>
            </span>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
