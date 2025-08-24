import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import axios from "axios";
import GeneralContext from "../GeneralContext/GeneralContext";
import "./SellActionWindow.css";

function SellActionWindow({ uid, holdingQty, ltp, onSellSuccess }) {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(ltp || 0.0);
  const generalContext = useContext(GeneralContext);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const handleSellButtonClick = async () => {
    if (stockQuantity > holdingQty) {
      alert("You don’t hold enough quantity to sell.");
      return;
    }
    if (stockPrice <= 0) {
      alert("Please enter a valid price.");
      return;
    }
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        `${BACKEND_URL}/newOrder`,
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode: "SELL",
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      toast.success(
        `Stock sold at ltp ${stockQuantity} x ${uid} ₹${ltp.toFixed(2)}`
      );

      if (onSellSuccess) onSellSuccess();
      generalContext.closeSellWindow();
    } catch (error) {
      console.error("Sell failed:", error.response?.data || error);
      toast.error("Sell failed. Please try again.");
    }
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
              min="1"
              max={holdingQty}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={(stockQuantity * stockPrice).toFixed(2)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Expected Credit ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
        <div>
          <Link className="btn btn-blue" onClick={handleSellButtonClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SellActionWindow;
