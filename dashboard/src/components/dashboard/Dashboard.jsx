import React from "react";
import "./Dashboard.css";
import { Route, Routes, useLocation } from "react-router-dom";

import Apps from "../apps/Apps";
import Funds from "../funds/Funds";
import Holdings from "../holdings/Holdings";

import Orders from "../orders/Orders";
import Positions from "../positions/Positions";
import Summary from "../summary/Summary";
//import WatchList from "../watchlist/WatchList";
import { GeneralContextProvider } from "../GeneralContext/GeneralContext.jsx";
import Stocks from "../stock/Stocks.jsx";
import NotFound from "../notFound/NotFound.jsx";

function Dashboard() {
  const location = useLocation();

  // Define valid dashboard routes
  const validPaths = [
    "/",
    "/orders",
    "/holdings",
    "/positions",
    "/funds",
    "/apps",
  ];

  const isValidRoute = validPaths.includes(location.pathname);

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        {/* <Stocks /> */}
        {isValidRoute && <Stocks />}
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </GeneralContextProvider>
    </div>
  );
}

export default Dashboard;
