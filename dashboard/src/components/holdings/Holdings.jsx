import React, { useState, useEffect, useContext } from "react";
import GeneralContext from "../GeneralContext/GeneralContext";
import { Grow, Tooltip } from "@mui/material";
import axios from "axios";
import "./Holdings.css";
import { VerticalChart } from "../Charts/VerticalChart";
//import SellActionWindow from "../SellActionWindow/SellActionWindow";

function Holdings() {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredRow, setHoveredRow] = useState(null);
  //const [selectedStock, setSelectedStock] = useState(null);
  const generalContext = useContext(GeneralContext);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const fetchHoldings = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.warn("No token found. Redirecting to login.");
      setLoading(false);
      return;
    }

    axios
      .get(`${BACKEND_URL}/allHoldings`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setAllHoldings(res.data || []);
      })
      .catch((err) => {
        console.error("Error fetching holdings:", err.response ?? err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchHoldings();
  }, []);

  if (loading) return <p>Loading holdings...</p>;

  const labels = allHoldings.map((stock) => stock.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price.toFixed(2)),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Stock Average Price",
        data: allHoldings.map((stock) => stock.avg.toFixed(2)),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const totalInvestment = allHoldings.reduce(
    (sum, stock) => sum + (stock.avg ?? 0) * (stock.qty ?? 0),
    0
  );
  const currentValue = allHoldings.reduce(
    (sum, stock) => sum + (stock.price ?? 0) * (stock.qty ?? 0),
    0
  );
  const totalPL = currentValue - totalInvestment;
  const plPercent = ((totalPL / totalInvestment) * 100).toFixed(2);

  const formatToKStyled = (num) => {
    const inThousands = num / 1000;
    const [whole, decimal] = inThousands.toFixed(2).split(".");
    return (
      <>
        {Number(whole).toLocaleString()}.<span>{decimal}</span>K
      </>
    );
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, idx) => {
              const currValue = (stock.price ?? 0) * (stock.qty ?? 0);
              const isProfit =
                currValue - (stock.avg ?? 0) * (stock.qty ?? 0) >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.day?.includes("-") ? "loss" : "profit";

              return (
                <tr
                  key={stock._id ?? idx}
                  className="all-holdings"
                  onMouseEnter={() => setHoveredRow(idx)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{(stock.avg ?? 0).toFixed(2)}</td>
                  <td>{(stock.price ?? 0).toFixed(2)}</td>
                  <td>{currValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(currValue - (stock.avg ?? 0) * (stock.qty ?? 0)).toFixed(
                      2
                    )}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                  <td>
                    {hoveredRow === idx && (
                      <Tooltip
                        title="Sell (S)"
                        placement="top"
                        arrow
                        slots={{ transition: Grow }}
                      >
                        <button
                          className="sell"
                          onClick={() =>
                            generalContext.openSellWindow(
                              stock.name,
                              stock.qty,
                              stock.price,
                              fetchHoldings // callback after successful sell
                            )
                          }
                        >
                          Sell
                        </button>
                      </Tooltip>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          {/* <h5>
            {Math.floor(totalInvestment).toLocaleString()}.
            <span>{(totalInvestment % 1).toFixed(2).split(".")[1]}</span>
          </h5> */}
          <h5>{formatToKStyled(totalInvestment)}</h5>

          <p>Total investment</p>
        </div>
        <div className="col">
          {/* <h5>
            {Math.floor(currentValue).toLocaleString()}.
            <span>{(currentValue % 1).toFixed(2).split(".")[1]}</span>
          </h5> */}
          <h5>{formatToKStyled(currentValue)}</h5>

          <p>Current value</p>
        </div>
        <div className="col">
          {/* <h5 className={totalPL >= 0 ? "profitPL" : "lossPL"}>
            {Math.floor(totalPL).toLocaleString()}.
            <span>{(totalPL % 1).toFixed(2).split(".")[1]}</span> ({plPercent}%)
          </h5> */}
          <h5 className={totalPL >= 0 ? "profitPL" : "lossPL"}>
            {formatToKStyled(totalPL)} ({plPercent}%)
          </h5>

          <p>P&L</p>
        </div>
      </div>

      <VerticalChart data={data} />
    </>
  );
}

export default Holdings;
