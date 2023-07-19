/* eslint-disable react/prop-types */
import "./Items.css";
import { ImStarFull } from "react-icons/im";
import { RiStarHalfFill } from "react-icons/ri";

const Items = (props) => {
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
          <button>Add To Cart</button>
        </div>
      </div>
    </>
  );
};

export default Items;
