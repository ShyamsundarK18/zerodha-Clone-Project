import "../Style/ProductHero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container text-center mt-5 py-5 border-bottom">
      <h1 className="hero_heading">Zerodha Products</h1>
      <p className="fs-5 pt-3">
        Sleek, modern, and intuitive trading platforms
      </p>
      <p>
        Check out our{" "}
        <Link className="fs-6">
          {" "}
          investment offerings <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </p>
      <br />
      <br />
    </div>
  );
}

export default Hero;
