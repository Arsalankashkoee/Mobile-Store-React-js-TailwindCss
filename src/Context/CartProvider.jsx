import React, { useEffect, useReducer } from "react";
import { useContext } from "react";

const CartContext = React.createContext();
const CartContextDispatcher = React.createContext();

const LOCAL_STORAGE_PRODUCT_KEY = "productState";

const initialState = {
  // cart: [],

  cart: JSON.parse(localStorage.getItem(LOCAL_STORAGE_PRODUCT_KEY)) || [],

  total: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      // console.log(action,state);
      const updatedCart = [...state.cart];
      // console.log(updatedCart);

      //if product exist return index && not exist return -1
      const index = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = { ...updatedCart[index] };
        updatedItem.quantity++;
        updatedCart[index] = updatedItem;
      }
      return {
        ...state,
        cart: updatedCart,
        total: state.total + action.payload.offPrice,
      };
    }
    case "DECREMENT_PRODUCT": {
      const updatedCart = [...state.cart];
      //if product exist return index && not exist return -1
      const index = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedItem = { ...updatedCart[index] };
      if (updatedItem.quantity === 1) {
        const filteredCart = updatedCart.filter(
          (cart) => cart.id !== action.payload.id
        );
        return {
          ...state,
          cart: filteredCart,
          total: state.total - action.payload.offPrice,
        };
      } else {
        updatedItem.quantity--;
        updatedCart[index] = updatedItem;
        return {
          ...state,
          cart: updatedCart,
          total: state.total - action.payload.offPrice,
        };
      }
    }

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, initialState);
  // console.log(cart.cart);
  // console.log(cart.total);

  useEffect(() => {
    const data = JSON.stringify(cart.cart);
    localStorage.setItem(LOCAL_STORAGE_PRODUCT_KEY, data);
  }, [cart.cart, cart.total]);

  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatcher.Provider value={dispatch}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);

export const useCartActions = () => useContext(CartContextDispatcher);
