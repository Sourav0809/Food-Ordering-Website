/* eslint-disable react/prop-types */
import "./ItemsContainer.css";
import Ui from "../UI/UI";
import Items from "../Items/Items";
import DummyMeals from "../../assets/DummyMeals/DummyMeals";
import CartContext from "../Store/CartContext";
import { useContext } from "react";
const ItemsContainer = (props) => {
  /* if the items is already present in the array 
  then we are forming new array and pass the value alreadyPresent */

  const cartCtx = useContext(CartContext);
  const newArr = DummyMeals.map((mealsItem) => {
    let alreadyPresent = false;
    cartCtx.cartItems.forEach((cartItems) => {
      if (mealsItem.id === cartItems.id) {
        alreadyPresent = true;
      }
    });
    return { ...mealsItem, alreadyPresent: alreadyPresent };
  });
  return (
    <>
      <h5 className="items-container-heading">Our Dishes</h5>
      <h2 className="items-container-2nd-heading">Popular Dishes</h2>
      <Ui>
        {newArr.map((items) => {
          return (
            <Items
              key={items.id}
              id={items.id}
              name={items.itemName}
              price={items.price}
              img={items.img}
              viewCart={props.viewCart}
              alreadyPresent={items.alreadyPresent}
            />
          );
        })}
      </Ui>
    </>
  );
};

export default ItemsContainer;
