/* eslint-disable react/prop-types */
import "./UI.css";
const UI = (props) => {
  return (
    <div className="main-items-container">
      <div className="items-container">{props.children}</div>
    </div>
  );
};

export default UI;

//
