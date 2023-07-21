/* eslint-disable react/prop-types */
import "./Items.css";
import { ImStarFull } from "react-icons/im";
import { RiStarHalfFill } from "react-icons/ri";
import CartContext from "../Store/CartContext";
import { useContext } from "react";
const Items = (props) => {
  // using usestate to addtocart button when someone clicked the btn
  // using context here
  const cartCtx = useContext(CartContext);
  // when someone clicked the add to cart btn

  const addToCartHandeler = () => {
    const addedCartItems = {
      name: props.name,
      price: props.price,
      quantity: 1,
      id: props.id,
      img: props.img,
    };
    if (props.alreadyPresent === true) {
      props.viewCart();
    } else {
      cartCtx.addItems(addedCartItems);
    }
  };

  return (
    <>
      <div className="product-container">
        <div className="product-img">
          <img src={props.img} />
        </div>
        <div className="review-sec">
          <ImStarFull className="review-icons" />
          <ImStarFull className="review-icons" />
          <ImStarFull className="review-icons" />
          <ImStarFull className="review-icons" />
          <RiStarHalfFill className="review-icons-last" />
        </div>
        <div className="product-text">{props.name}</div>
        <div className="product-price">
          <h3>&#8377;{props.price}</h3>
          <button onClick={addToCartHandeler}>
            {props.alreadyPresent ? "View Cart" : "Add To Cart"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Items;
