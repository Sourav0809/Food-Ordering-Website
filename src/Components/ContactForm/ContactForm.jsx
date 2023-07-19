import "./ContactForm.css";
import { BsFillTelephoneFill } from "react-icons/bs";

const ContactForm = () => {
  return (
    <>
      <div className="contact-form-heading">
        <h3> Have A large Order ? </h3>
      </div>
      <div className="contact-form-2nd-heading">
        <BsFillTelephoneFill />
        <h4> Contact Us</h4>
      </div>

      <div className="contact-form-container">
        <form className="contact-us-form">
          <div className="contact-form-name">
            <label htmlFor="name" className="contact-form-label">
              Name
            </label>
            <input type="text" className="contact-form-input" />
          </div>
          <div className="contact-form-phone">
            <label htmlFor="phone" className="contact-form-label">
              Phone
            </label>
            <input type="number" className="contact-form-input" />
          </div>
          <div className="contact-form-email">
            <label htmlFor="email" className="contact-form-label">
              Email
            </label>
            <input type="text" className="contact-form-input" />
          </div>

          <div className="contact-form-adress">
            <label htmlFor="adress" className="contact-form-label">
              Adress
            </label>
            <input type="text" className="contact-form-input" />
          </div>
          <div className="contact-form-message">
            <label htmlFor="message" className="contact-form-label">
              Message
            </label>
            <input type="text" className="contact-form-input" />
          </div>
          <button className="contact-us-btn">Submit</button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
