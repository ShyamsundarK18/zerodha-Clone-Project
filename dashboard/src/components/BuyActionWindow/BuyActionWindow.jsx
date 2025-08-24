import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import axios from "axios";
import GeneralContext from "../GeneralContext/GeneralContext";
import "./BuyActionWindow.css";

function BuyActionWindow({ uid, onBuySuccess, ltp }) {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(ltp || 0.0);

  const { closeBuyWindow } = useContext(GeneralContext);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const handleBuyButtonClick = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${BACKEND_URL}/newOrder`,
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "BUY",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(
        `Stock Bought ${stockQuantity} × ${uid} @ ₹${stockPrice.toFixed(2)}`
      ); //  Toast

      // Optionally: refresh holdings & orders lists here
      if (onBuySuccess) onBuySuccess();

      closeBuyWindow();
    } catch (err) {
      console.error("Error placing order:", err.response?.data || err);
      toast.error("Buy failed. Please try again."); //  Error toast
    }
  };
  useEffect(() => {
    setStockPrice(ltp || 0.0);
    setStockQuantity(1); // Optional: reset quantity too
  }, [ltp, uid]);

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={(stockQuantity * stockPrice).toFixed(2)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyButtonClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BuyActionWindow;
