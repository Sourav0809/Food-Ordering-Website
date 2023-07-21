/* eslint-disable react/prop-types */
import "./Ui.css";
const Ui = (props) => {
  return (
    <div className="main-items-container">
      <div className="items-container">{props.children}</div>
    </div>
  );
};

export default Ui;

//
