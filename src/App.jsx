import { useState } from "react";
import Header from "./Components/Header/Header";
import CoversContainer from "./Components/CoverSection/CoversContainer/CoversContainer";
import ItemsContainer from "./Components/ItemsContainer/ItemsContainer";
import About from "./Components/About/About";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";
import CartProvider from "./Components/Store/CartProvider";
import Cart from "./Components/Cart/Cart";

function App() {
  // to show and hide cart page
  const [viewCart, setViewCart] = useState(false);

  const viewCartHandeler = () => {
    setViewCart(true);
  };
  const hideCartPage = () => {
    setViewCart(false);
  };

  return (
    <CartProvider>
      <Header viewCart={viewCartHandeler} />
      {viewCart && <Cart hideCartPage={hideCartPage} />}
      <>
        <CoversContainer />
        <ItemsContainer viewCart={viewCartHandeler} />
        <About />
        <ContactForm />
        <Footer />
      </>
    </CartProvider>
  );
}

export default App;
