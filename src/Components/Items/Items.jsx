/* eslint-disable react/prop-types */
import "./Items.css";

const Items = (props) => {
  return (
    <>
      <div className="product-container">
        <div className="product-img">
          <img src={props.img} />
        </div>
        <div className="product-text">{props.name}</div>
        <div className="product-price">
          <h3>${props.price}</h3>
          <button>Add To Cart</button>
        </div>
      </div>
    </>
  );
};

export default Items;
