import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Position.css";

function Position() {
  const [allPositions, setAllPositions] = useState([]);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.warn("No token found. Redirecting to login.");
      return;
    }

    axios
      .get(`${BACKEND_URL}/allPositions`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
        setAllPositions(res.data || []);
      })
      .catch((err) => {
        console.error("Error fetching positions:", err.response ?? err);
        if (
          err.response &&
          (err.response.status === 401 || err.response.status === 403)
        ) {
          // optionally clear token and redirect
          // localStorage.removeItem("token");
          // window.location.href = "/";
        }
      });
  }, [BACKEND_URL]);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          <tbody>
            {allPositions.map((stock, idx) => {
              const currValue = stock.price * stock.qty;
              const isProfit = currValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.day.startsWith("-") ? "loss" : "profit";

              return (
                <tr key={idx}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profClass}>
                    {(currValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Position;
