import "./App.css";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/headerSlider/Header";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Reviews from "./components/reviews/Reviews";
import Services from "./components/services/Services";
import { Element } from 'react-scroll';


function App() {
  return (
    <>
      <Navbar />
      <Element name="header">
        <Header />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="portfolio">
        <Portfolio />
      </Element>
      <Element name="reviews">
        <Reviews />
      </Element>
      <Element name="contact">
      <Contact />
      </Element>
      
      <Footer />
    </>
  );
}

export default App;
