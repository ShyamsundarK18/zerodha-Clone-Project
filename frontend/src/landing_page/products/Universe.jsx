import { useNavigate } from "react-router-dom";
import "../Style/ProductUniverse.css";
function Universe() {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <div className="container ">
      <div className="row p-5 universe-row">
        <h3 className="text-center py-3">The Zerodha Universe</h3>
        <h5 className="text-center mb-5 pt-1 ps-0 p-5 special-heading">
          Extend your trading and investment experience even further with our
          partner platforms
        </h5>
        <div className="col ps-4 text-center">
          <a href="#" className="">
            <img
              className="universe-logos mb-3"
              src="/media/images/zerodhaFundhouse.png"
              alt="zerodhaFundhouse"
            />
            <br />
            <span className="logo-para fs-6 text-muted">
              Our asset management venture <br />
              that is creating simple and transparent index <br /> funds to help
              you save for your goals.
            </span>
          </a>

          <br />
          <br />
          <br />
          <br />

          <a href="#" className="">
            <img
              className="universe-logos mb-3"
              src="/media/images/streakLogo.png"
              alt="streakLogo"
            />
            <br />
            <span className="logo-para fs-6 text-muted">
              Systematic trading platform <br /> that allows you to create and
              backtest <br /> strategies without coding.
            </span>
          </a>
        </div>
        <div className="col  ps-4 text-center">
          <a href="#" className="">
            <img
              className="universe-logos sensibullLogo mb-3"
              src="/media/images/sensibullLogo.svg"
              alt="zerodhaFundhouse"
            />
            <br />
            <span className="logo-para fs-6 text-muted">
              Options trading platform that lets you <br /> create strategies,
              analyze positions, and examine
              <br /> data points like open interest, FII/DII, and more.
            </span>
          </a>

          <br />
          <br />
          <br />
          <br />

          <a href="#" className="">
            <img
              className="universe-logos mb-3"
              src="/media/images/smallcaseLogo.png"
              alt="streakLogo"
            />
            <br />
            <span className="logo-para fs-6 text-muted">
              Thematic investing platform <br /> that helps you invest in
              diversified <br /> baskets of stocks on ETFs.
            </span>
          </a>
        </div>
        <div className="col  ps-4 text-center">
          <a href="#" className="">
            <img
              className="universe-logos tijori mb-3"
              src="/media/images/tijori.svg"
              alt="zerodhaFundhouse"
            />
            <br />
            <span className="logo-para fs-6 text-muted">
              Investment research platform <br />
              that offers detailed insights on stocks, <br /> sectors, supply
              chains, and more.
            </span>
          </a>

          <br />
          <br />
          <br />
          <br />

          <a href="#" className="">
            <img
              className="universe-logos-ditto mb-3"
              src="/media/images/dittoLogo.png"
              alt="streakLogo"
            />
            <br />
            <span className="logo-para fs-6 text-muted">
              Personalized advice on life <br /> and health insurance. No spam{" "}
              <br /> and no mis-selling.
            </span>
          </a>
        </div>
      </div>
      <div className="text-center">
        <button
          className="p-2 btn btn-primary fs-5 mb-4 mt-1 universe-btn"
          style={{ width: "18%", margin: "0 auto" }}
          onClick={handleSignupClick}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
