import "./ItemsContainer.css";
import Ui from "../UI/UI";
import Items from "../Items/Items";
import DummyMeals from "../../assets/DummyMeals/DummyMeals";
const ItemsContainer = () => {
  return (
    <>
      <h5 className="items-container-heading">Our Dishes</h5>
      <h2 className="items-container-2nd-heading">Popular Dishes</h2>
      <Ui>
        {DummyMeals.map((items) => {
          return (
            <Items
              key={items.id}
              id={items.id}
              name={items.itemName}
              price={items.price}
              img={items.img}
            />
          );
        })}
      </Ui>
    </>
  );
};

export default ItemsContainer;
