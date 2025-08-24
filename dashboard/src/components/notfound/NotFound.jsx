import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"; // 👈 Import your custom styles

function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-row">
        <div className="notfound-text">
          <h3 className="notfound-code">404</h3>
          <h1 className="notfound-title">Tanu couldn't find that page</h1>
          <p className="notfound-message">
            We couldn't find the page you were looking for. Visit{" "}
            <Link className="notfound-link" to="/">
              InvestIQ Dashboard page
            </Link>
          </p>
        </div>
        <div className="notfound-image-wrapper">
          <img className="notfound-image" src="/404_tanu.png" alt="Tanu_404" />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
