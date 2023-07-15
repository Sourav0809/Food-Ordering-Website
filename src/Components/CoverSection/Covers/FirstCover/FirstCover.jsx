/* eslint-disable react/no-unescaped-entities */
import "./FirstCover.css";

const FirstCover = () => {
  return (
    <section className="main-section">
      <div className="text-section">
        <div className="text-container">
          <h3>Our Special Dish</h3>
          <h1>Hot Pizza</h1>
          <div className="text-para">
            <p>
              A chicken sandwich is only as good as its ingredients. That's why
              we import our spices and use top-quality ingredients in each of
              our Nashville Hot Chicken tenders, as well as our other offerings.
            </p>
          </div>
          <button className="cover-btn">Order Now</button>
        </div>
      </div>
      <div className="image-section">
        <img src="https://img.freepik.com/premium-photo/isolated-pizza-with-mushrooms-olives_219193-8149.jpg?w=826" />
      </div>
    </section>
  );
};

export default FirstCover;
