import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import GeneralContext from "../GeneralContext/GeneralContext.jsx";
// import { stocks } from "../../data/data";
import { Grow, Tooltip } from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import BarChartIcon from "@mui/icons-material/BarChart";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Bar } from "react-chartjs-2";
import "./stocks.css";
import { DoughnutChart } from "../Charts/DoughnutChart.jsx";

function Stocks() {
  const generalContext = useContext(GeneralContext);
  const [holdings, setHoldings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [stocks, setStocks] = useState([]);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const filteredstocks = stocks.filter((stock) =>
    stock.name.toLowerCase().includes(searchTerm)
  );

  const fetchHoldings = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.warn("No token found. Redirecting to login.");
      return;
    }

    axios
      .get(`${BACKEND_URL}/allHoldings`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setHoldings(res.data || []);
      })
      .catch((err) => {
        console.error("Error fetching holdings:", err.response ?? err);
      });
  };

  useEffect(() => {
    fetchHoldings();
    const token = localStorage.getItem("token");
    if (!token) {
      console.warn("No token found. Redirecting to login.");
      return;
    }

    axios
      .get(`${BACKEND_URL}/api/auth/stocks`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setStocks(res.data || []);
      })
      .catch((err) => {
        console.error("Error fetching stocks:", err.response ?? err);
      });
  }, []);

  const generateColors = (count, opacity = 0.5) =>
    Array.from(
      { length: count },
      (_, i) => `hsl(${(i * 137.5) % 360}, 70%, 60%, ${opacity})`
    );

  const labels = stocks.map((subArr) => subArr["name"]);
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: stocks.map((stock) => stock.price),
        backgroundColor: generateColors(stocks.length, 0.6),
        borderColor: generateColors(stocks.length, 0.6),

        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="stocks-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for stocks (Eg-infy, bse, nifty) "
          className="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />
        <span className="counts"> {stocks.length}/ 100</span>
      </div>

      <ul className="list">
        {filteredstocks.map((stock, index) => {
          return (
            <StocksItem
              stock={stock}
              key={index}
              onBuySuccess={fetchHoldings}
            />
          );
        })}
      </ul>

      <div className="doughnut-wrapper">
        <DoughnutChart data={data} />
      </div>
    </div>
  );
}

export default Stocks;

function StocksItem({ stock, onBuySuccess }) {
  const [showstocksActions, setShowstocksActions] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowstocksActions(true)}
      onMouseLeave={() => setShowstocksActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDownIcon className="down" />
          ) : (
            <KeyboardArrowUpIcon className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showstocksActions && (
        <StocksActions
          uid={stock.name}
          ltp={stock.price}
          onBuySuccess={onBuySuccess}
          onShowAnalytics={() => setShowAnalytics(true)}
          onShowMore={() => setShowMore(true)}
        />
      )}

      {showAnalytics && (
        <div className="analytics-modal">
          <div className="model-header">
            <span>
              Analytics for{" "}
              <span className={stock.isDown ? "down" : "up"}>{stock.name}</span>
            </span>
            <button
              className="model-close-btn"
              onClick={() => setShowAnalytics(false)}
            >
              Close
            </button>
          </div>
          <Bar
            data={{
              labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
              datasets: [
                {
                  label: `${stock.name} Price`,
                  data: [
                    stock.price - 5,
                    stock.price - 3,
                    stock.price,
                    stock.price + 2,
                    stock.price + 1,
                  ],
                  backgroundColor: "rgba(54, 162, 235, 0.5)",
                  borderColor: "rgba(54, 162, 235, 1)",
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: { position: "top" },
                title: { display: true, text: "Weekly Price Trend" },
              },
            }}
          />
        </div>
      )}

      {showMore && (
        <div className="more-modal">
          <div className="model-header">
            <h4>
              Details for{" "}
              <span className={stock.isDown ? "down" : "up"}>{stock.name}</span>
            </h4>
            <button
              className="model-close-btn"
              onClick={() => setShowMore(false)}
            >
              Close
            </button>
          </div>
          <ul>
            <li>
              <strong>Price:</strong>{" "}
              <span className={stock.isDown ? "down" : "up"}>
                ₹{stock.price}
              </span>
            </li>
            <li>
              <strong>Change:</strong>{" "}
              <span className={stock.isDown ? "down" : "up"}>
                {stock.percent}
              </span>
            </li>
            <li>
              <strong>Trend:</strong>{" "}
              <span className={stock.isDown ? "down" : "up"}>
                {stock.isDown ? "Down" : "Up"}
              </span>
            </li>
          </ul>
        </div>
      )}
    </li>
  );
}

function StocksActions({
  uid,
  ltp,
  onBuySuccess,
  onShowAnalytics,
  onShowMore,
}) {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid, onBuySuccess, ltp);
  };

  return (
    <span className="actions">
      <span className="tooltip-icons">
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          slots={{ transition: Grow }}
        >
          <button className="buy" onClick={handleBuyClick}>
            Buy
          </button>
        </Tooltip>

        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          slots={{ transition: Grow }}
        >
          <button className="action" onClick={onShowAnalytics}>
            <BarChartIcon className="icon" />
          </button>
        </Tooltip>

        <Tooltip
          title="More"
          placement="top"
          arrow
          slots={{ transition: Grow }}
        >
          <button className="more-btn" onClick={onShowMore}>
            <MoreHorizIcon className="more-icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
}
