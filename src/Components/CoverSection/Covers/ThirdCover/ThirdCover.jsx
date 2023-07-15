import "./ThirdCover.css";

const ThirdCover = () => {
  return (
    <section className="main-section">
      <div className="text-section-third">
        <div className="text-container">
          <h3>Our Special Dish</h3>
          <h1>Fried Chicken</h1>
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
        <img src="https://img.freepik.com/premium-photo/plate-with-roasted-turkey-white-background_392895-32237.jpg?size=626&ext=jpg&ga=GA1.1.1822928219.1689105323&semt=ais" />
      </div>
    </section>
  );
};

export default ThirdCover;
