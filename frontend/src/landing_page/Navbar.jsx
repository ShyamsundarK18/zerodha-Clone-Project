import "./Style/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg border-bottom">
      <div className="container  p-2 ps-5">
        <Link className="navbar-brand" to="/">
          <img className="nav-logo" src="/media/images/logo.svg" alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav ps-3 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="signup"
                >
                  Signup
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="products">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="support">
                  Support
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="login">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  <i className="fa-solid fa-bars"></i>
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
