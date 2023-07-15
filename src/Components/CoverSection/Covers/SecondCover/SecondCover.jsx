import "./SecondCover.css";

const SecondCover = () => {
  return (
    <section className="main-section">
      <div className="text-section">
        <div className="text-container">
          <h3>Our Special Dish</h3>
          <h1>Chicken Biriyani</h1>
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
        <img src="https://img.freepik.com/premium-photo/bowl-food-with-piece-meat-vegetables-it_867452-673.jpg?w=826" />
      </div>
    </section>
  );
};

export default SecondCover;
