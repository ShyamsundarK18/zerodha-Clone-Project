import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container p-3">
      <div className="row mt-0 mx-5 px-5">
        <div className="col p-5">
          <h3 className="text-muted">404</h3>
          <h1 className="">Tanu couldn't find that page</h1>
          &nbsp;
          <p className="fs-5">
            We couldn't find the page you were looking for. Visit{" "}
            <Link className="fs-5" to="/">
              Zerodha's home page
            </Link>
          </p>
        </div>
        <div className="col">
          <img
            style={{ width: "90%", height: "90%" }}
            src="/media/images/404_tanu.png"
            alt="Tanu_404"
          />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
