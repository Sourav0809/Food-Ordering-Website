/* eslint-disable react/no-unescaped-entities */
import "./FourthCover.css";

const FourthCover = () => {
  return (
    <section className="main-section">
      <div className="text-section">
        <div className="text-container">
          <h3>Our Special Dish</h3>
          <h1>Garnish Momo's</h1>
          <div className="text-para">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
              temporibus! Lorem ipsum dolor, sit amet consectetur adipisicin ?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              quibusdam.
            </p>
          </div>
          <button className="cover-btn">Order Now</button>
        </div>
      </div>
      <div className="image-section">
        <img src="https://img.freepik.com/premium-photo/plate-dumplings-with-green-garnish-top_787273-1770.jpg?w=826" />
      </div>
    </section>
  );
};

export default FourthCover;
