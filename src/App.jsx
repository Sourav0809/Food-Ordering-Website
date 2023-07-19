import Header from "./Components/Header/Header";
import CoversContainer from "./Components/CoverSection/CoversContainer/CoversContainer";
import ItemsContainer from "./Components/ItemsContainer/ItemsContainer";
import About from "./Components/About/About";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <Header />;
      <CoversContainer />
      <ItemsContainer />
      <About />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
