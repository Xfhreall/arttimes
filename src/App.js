// import Element`
import Navtop from "./component/Navtop";
import HeroPage from "./component/HeroPage";
import About from "./component/About";
import Product from "./component/Product";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
// import css
import "./styling/navtop.css";
import "./styling/heroPage.css";
import "./styling/aboutPage.css";
import "./styling/product.css";
import "./styling/contact.css";
import "./styling/footer.css";

function App() {
  return (
    <div>
      <div className="landing">
        <Navtop />
      </div>
      <div className="heroPage">
        <HeroPage />
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
}

export default App;
