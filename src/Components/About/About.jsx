import "./About.css";
import { TbTruckDelivery } from "react-icons/tb";
import { BsCurrencyDollar } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";

const About = () => {
  return (
    <>
      <div className="about-text-section">
        <h4>About Us</h4>
        <h2>WHY CHOOSE US ?</h2>
      </div>
      <div className="about-container">
        <div className="about-img">
          <img src="https://img.freepik.com/free-photo/beyti-kebab-served-with-ayran-pickles_141793-1870.jpg?w=996&t=st=1689573517~exp=1689574117~hmac=6848892262c3202a063e05f87d11355d1c94b67a593a4560c78939110bbc44a0" />
        </div>
        <div className="about-text">
          <h2>Best Food In The City</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            aspernatur, consequatur repellendus cum temporibus libero ipsam
            laboriosam sapiente et recusandae nostrum quae est quibusdam totam
            accusantium perspiciatis quidem dolores non fugit vitae dolorem
            delectus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur labore, et expedita facilis hic dolores repellat
            commodi? Doloribus, id? Nihil dolor quisquam facere?
          </p>
          <div className="about-icons-container">
            <div className="first-icon">
              <TbTruckDelivery className="main-icons" />
              <h4>Free Delivery</h4>
            </div>
            <div className="sec-icon">
              <BsCurrencyDollar className="main-icons" />
              <h4>Easy Payments</h4>
            </div>
            <div className="third-icon">
              <RiCustomerService2Fill className="main-icons" />
              <h4>24/7 Service</h4>
            </div>
          </div>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </>
  );
};

export default About;
