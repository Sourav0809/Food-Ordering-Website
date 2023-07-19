import { FaCopyright } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="main-footer">
        <FaCopyright className="footer-icon" />
        <h3 className="footer-text">
          Kolkata Local | 2023 | All Right Reserved
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
