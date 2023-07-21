/* eslint-disable react/prop-types */
import "./Card.css";
const Card = (props) => {
  return (
    <div className="main-items-container">
      <div className="items-container">{props.children}</div>
    </div>
  );
};

export default Card;

//
