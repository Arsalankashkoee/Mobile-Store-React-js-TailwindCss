import { NavLink } from "react-router-dom";
import { useCart } from "../Context/CartProvider";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useAuth } from "../Context/AuthProvider";
import logoArsalan from "../Images/LOGO2.png";
import { BiUserCircle } from "react-icons/bi";
import { IoMenuSharp } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { ImBlogger } from "react-icons/im";
import { MdOutlineHelp } from "react-icons/md";
import React, { useState } from "react";

const Header = () => {
  const [isShow, setIsShow] = useState(false);

  const { cart } = useCart();
  const userData = useAuth();

  return (
    <React.Fragment className="mb-11">
      <header className="bg-violet-200 shadow-lg p-2 mb-5  sticky top-0 z-10">
        <nav className="container w-full flex items-center justify-between">
          {/* left */}
          <ul className="hidden md:flex md:items-center justify-center gap-11">
            <li className=" hover:text-violet-600">
              <Link to="/">
                <img
                  className="w-14 h-14 rounded-full"
                  src={logoArsalan}
                  alt=""
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

          {/* hamburger-menu */}
          <button
            className="block md:hidden text-violet-700"
            onClick={() => setIsShow(!isShow)}
          >
            <IoMenuSharp className="w-7 h-7 text-violet-700" />
          </button>

          {/* right */}
          <div className="flex items-center justify-center gap-11">
            <span className="hover:bg-violet-300 rounded-full p-1 flex items-center justify-center relative">
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

      {isShow && (
        <div className=" bg-white shadow-lg rounded-lg mb-5 py-1 ">
          <ul
            className="container text-slate-600"
            onClick={() => setIsShow(false)}
          >
            <li className="mb-2">
              <Link to="/" className="flex items-center gap-2">
                <span className="">
                  <AiFillHome className="text-violet-700" />
                </span>
                <span className="">Home</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/blogs" className="flex items-center gap-2">
                <span className="">
                  <ImBlogger className="text-violet-700" />
                </span>
                <span className="">Blogs</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/aboutUs" className="flex items-center gap-1">
                <span className="">
                  <MdOutlineHelp className="text-violet-700 w-5 h-5" />
                </span>
                <span className="">About Us</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

export default Header;

// {isShow && (
//   <div>
//     <ul>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/blogs">Blogs</Link>
//       </li>
//       <li>
//         <Link to="/aboutUs">About Us</Link>
//       </li>
//     </ul>
//   </div>
// )}
