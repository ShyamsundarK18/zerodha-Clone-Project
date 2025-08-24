import { useNavigate } from "react-router-dom";
function OpenAccount() {
  const navigate = useNavigate();
  const handleSignupClick = () => {
    navigate("/signup");
  };
  return (
    <div className="container text-center pb-5">
      <h1 className="fs-2 mb-4">Open a Zerodha account</h1>
      <p className="mb-4">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
        trades.
      </p>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary btn-lg px-4"
          onClick={handleSignupClick}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
