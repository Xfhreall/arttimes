// import Element`
import Navtop from "./component/Navtop";
import HeroPage from "./component/HeroPage";
import About from "./component/About";
import Product from "./component/Product";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import LinkHero from "./component/LinkHero";
import Ingredient from "./component/Ingredient";

{
  /*untuk menggunakan lottie
1. import Lottie from "lottie-react" 
2. import 'lottie element' from 'src lokal lottie'*/
}

const App = () => {
  return (
    <div>
      <div className="landing">
        <Navtop />
      </div>
      <div className="heroPage">
        <HeroPage />
      </div>
      <div className="linkHero">
        <LinkHero />
      </div>
      <div className="ingredient">
        <Ingredient />
      </div>
      <div className="about">
        <About />
      </div>
      <div className="product">
        <Product />
      </div>
      <div className="contact">
        <Contact />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
