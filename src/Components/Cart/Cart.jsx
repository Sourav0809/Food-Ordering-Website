/* eslint-disable react/prop-types */
import "./Cart.css";
import Modal from "../Card/Modal";
import CartContext from "../Store/CartContext";
import { useContext } from "react";
import useStopScroll from "../Hooks/useStopScroll";
const Cart = (props) => {
  // calling the customhooks to prevent the scroll when cart conatiner is shown */
  useStopScroll();
  // using the cart context to gettig the cart values
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.cartItems;
  return (
    <Modal>
      {cartItems.length != 0 ? (
        <>
          {cartItems.map((items) => {
            return (
              <div key={items.id}>
                <div className="cart-items-container">
                  <div className="cart-item-image-name">
                    <div className="cart-image-container">
                      <img src={items.img} alt="logo" />
                    </div>
                    <div className="cart-item-name">
                      <h2>{items.name}</h2>
                    </div>
                  </div>
                  <div className="cart-item-quantity">
                    <button
                      className="cart-qunatity-btn"
                      onClick={() => {
                        cartCtx.incrementCartItem(items.id);
                      }}
                    >
                      +
                    </button>
                    <h2> &#x2716; {items.quantity}</h2>
                    <button
                      className="cart-qunatity-btn"
                      onClick={() => {
                        cartCtx.decrementCartItem(items.id);
                      }}
                    >
                      -
                    </button>
                  </div>
                  <div className="cart-item-price">
                    <h2>&#8377; {items.price}</h2>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
          <div className="total-amount-container">
            <h1>Total Price</h1>
            <h1>&#8377; {cartCtx.totalPrice}</h1>
          </div>

          <div className="cart-btn">
            <button className="order-btn">Order</button>
            <button onClick={props.hideCartPage} className="close-btn">
              Close
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="empty-cart-container">
            <h1 className="empty-cart-text">Your Cart is Empty </h1>
            <div className="empty-item-div"></div>
          </div>
          <div className="close-btn-container">
            <button onClick={props.hideCartPage} className="close-btn">
              Close
            </button>
          </div>
        </>
      )}
    </Modal>
  );
};

export default Cart;
