import React, { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const FRONTEND_URL = import.meta.env.VITE_FRONTEND_URL;

  useEffect(() => {
    const verifyToken = async () => {
      // Step 1 — store token from URL if present
      const params = new URLSearchParams(window.location.search);
      const tokenFromUrl = params.get("token");
      const usernameFromUrl = params.get("username");

      if (tokenFromUrl) {
        localStorage.setItem("token", tokenFromUrl);
        if (usernameFromUrl) {
          localStorage.setItem("username", usernameFromUrl);
        }
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
      }

      // Step 2 — get token from localStorage
      const token = localStorage.getItem("token");
      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      // Step 3 — verify with backend
      try {
        const res = await axios.get(`${BACKEND_URL}/api/auth/verify`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.status === 200 && res.data.success) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Token verification error:", error);
        setIsAuthenticated(false);
      }
    };

    verifyToken();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    window.location.href = `${FRONTEND_URL}/login`;
    return null;
  }

  return children;
};

export default ProtectedRoute;
