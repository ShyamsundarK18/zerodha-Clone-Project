import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <div className="container  pt-md-0 p-5 mb-5">
      <div className="row justify-content-center text-center">
        <div className="col-12">
          <img
            src="/media/images/homeHero.png"
            alt="Hero"
            className="mb-5 img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div className="col-12">
          <h1 className="mt-3">Invest in everything</h1>
          <p className="fs-5">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <button
            className="p-2 btn btn-primary fs-5 mb-3 mt-4"
            style={{ width: "18%", minWidth: "200px" }}
            onClick={handleSignupClick}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
