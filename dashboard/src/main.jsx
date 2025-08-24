import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./components/home/Home.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//  Extract token and username from URL
const params = new URLSearchParams(window.location.search);
const tokenFromUrl = params.get("token");
const usernameFromUrl = params.get("username");

if (tokenFromUrl) {
  localStorage.setItem("token", tokenFromUrl);
  if (usernameFromUrl) {
    localStorage.setItem("username", usernameFromUrl);
  }

  //  Clean the URL (no query params in address bar)
  const newUrl = window.location.origin + window.location.pathname;
  window.history.replaceState({}, document.title, newUrl);
}

//  Now safely render the app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
      <ToastContainer position="top-center" autoClose={3000} />
    </BrowserRouter>
  </StrictMode>
);
