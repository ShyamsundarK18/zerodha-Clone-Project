import React, { useEffect, useState } from "react";
import "./Summary.css";

function Summary() {
  const [username, setUsername] = useState("");
  const [summary, setSummary] = useState(null);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(`${BACKEND_URL}/api/auth/summary`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => {
          setUsername(data.username);
          setSummary(data); // full summary object
        })
        .catch((err) => {
          console.error("Summary fetch failed:", err);
        });
    }
  }, [BACKEND_URL]);

  const formatMoney = (value) => {
    if (value === undefined || value === null) return "—";

    const num = parseFloat(value);
    if (isNaN(num)) return "—";

    const sign = num < 0 ? "-" : "";
    const absNum = Math.abs(num);

    if (absNum >= 100000) return `${sign}₹${(absNum / 100000).toFixed(2)}L`;
    if (absNum >= 1000) return `${sign}₹${(absNum / 1000).toFixed(2)}K`;
    return `${sign}₹${absNum.toFixed(2)}`;
  };

  const isProfit = summary?.holdings.pnl.percent >= 0;

  return (
    <>
      <div className="username">
        <h6>Hi, {username || "User"}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>{formatMoney(summary?.equity.marginAvailable)}</h3>

            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used{" "}
              <span>{formatMoney(summary?.equity.marginUsed)}</span>
            </p>
            <p>
              Opening balance{" "}
              <span>{formatMoney(summary?.equity.openingBalance)}</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({summary?.holdings.count || "—"})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={isProfit ? "profit" : "loss"}>
              {formatMoney(summary?.holdings.pnl.value)}{" "}
              <small>
                {summary?.holdings.pnl.percent !== undefined
                  ? `${summary.holdings.pnl.percent >= 0 ? "+" : ""}${
                      summary.holdings.pnl.percent
                    }%`
                  : ""}
              </small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value{" "}
              <span>{formatMoney(summary?.holdings.currentValue)}</span>
            </p>
            <p>
              Investment{" "}
              <span>{formatMoney(summary?.holdings.investment)}</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
}

export default Summary;
