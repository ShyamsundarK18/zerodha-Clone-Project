import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Menu.css";

function Menu() {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [username, setUsername] = useState("");

  const location = useLocation();
  const currentPath = location.pathname;

  const FRONTEND_URL = import.meta.env.VITE_FRONTEND_URL;

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const usernameFromURL = urlParams.get("username");

    if (usernameFromURL) {
      localStorage.setItem("username", usernameFromURL);
      setUsername(usernameFromURL);
    } else {
      const storedUsername = localStorage.getItem("username");
      if (storedUsername) {
        setUsername(storedUsername);
      }
    }
  }, []);

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.href = `${FRONTEND_URL}`; // Redirect to login
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="kite-icon.png" className="logo" />
      <div className="menus">
        <ul>
          <li>
            <Link className="link-items" to="/">
              <p className={currentPath === "/" ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link className="link-items" to="/orders">
              <p
                className={
                  currentPath === "/orders" ? activeMenuClass : menuClass
                }
              >
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link className="link-items" to="/holdings">
              <p
                className={
                  currentPath === "/holdings" ? activeMenuClass : menuClass
                }
              >
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link className="link-items" to="/positions">
              <p
                className={
                  currentPath === "/positions" ? activeMenuClass : menuClass
                }
              >
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link className="link-items" to="/funds">
              <p
                className={
                  currentPath === "/funds" ? activeMenuClass : menuClass
                }
              >
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link className="link-items" to="/apps">
              <p
                className={
                  currentPath === "/apps" ? activeMenuClass : menuClass
                }
              >
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">
            {username.slice(0, 2).toUpperCase() || "UZ"}
          </div>
          <p className="username">{username || "USERID"}</p>
        </div>

        {isProfileDropdownOpen && (
          <div className="dropdown">
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;
