/* eslint-disable react/prop-types */
import "./Header.css";
import { MdFavorite } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = (props) => {
  return (
    <header className="main-header">
      <div className="header-text">
        <i className="bx bx-restaurant"></i>
        <h4>Kolkata Local</h4>
      </div>
      <div className="Header-icons">
        <AiOutlineShoppingCart
          onClick={props.viewCart}
          className="header-custom-icons-1"
        />

        <MdFavorite className="header-custom-icons" />
        <BiSearch className="header-custom-icons" />
      </div>
    </header>
  );
};

export default Header;
