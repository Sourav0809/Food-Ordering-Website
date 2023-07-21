/* eslint-disable react/prop-types */
import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (addedItem) => {
    setCartItems((prevItems) => {
      return [...prevItems, addedItem];
    });
  };

  // when user increment quantity from cart page

  const incrementHandeler = (id) => {
    setCartItems((prevItems) => {
      return prevItems.map((values) => {
        if (id === values.id) {
          values.quantity += 1;
        }
        return values;
      });
    });
  };

  // when user decrement quantity from cart page
  const decrementHandeler = (id) => {
    setCartItems((prevItems) => {
      const newArr = prevItems.map((values) => {
        if (id === values.id) {
          if (values.quantity <= 0) {
            values.quantity = 0;
          } else {
            values.quantity -= 1;
          }
        }
        return values;
      });
      // if user decrease quantity to zero
      const filteredArr = newArr.filter((values) => {
        return values.quantity !== 0;
      });
      return filteredArr;
    });
  };

  // calculating the total price of the cart
  let totalPrice = 0;
  cartItems.forEach((items) => {
    totalPrice += items.price * items.quantity;
  });

  const cartContext = {
    cartItems: cartItems,
    addItems: addToCart,
    totalPrice: totalPrice,
    incrementCartItem: incrementHandeler,
    decrementCartItem: decrementHandeler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
