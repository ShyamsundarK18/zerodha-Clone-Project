import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Funds.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Funds() {
  const [equityData, setEquityData] = useState({
    marginAvailable: 0,
    marginUsed: 0,
    openingBalance: 0,
  });

  const [showModal, setShowModal] = useState(null); // 'add' or 'withdraw'
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const fetchSummary = () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .get(`${BACKEND_URL}/api/auth/funds`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const equity = res.data?.equity || {};
        setEquityData({
          marginAvailable: equity.marginAvailable ?? 0,
          marginUsed: equity.marginUsed ?? 0,
          openingBalance: equity.openingBalance ?? 0,
        });

        if (equity.marginAvailable < 4000) {
          toast.warn("Your available margin is below ₹4,000", {
            position: "top-center",
            autoClose: 3000,
          });
        }
      })
      .catch((err) => {
        console.error("Error fetching summary for funds:", err.response ?? err);
      });
  };

  useEffect(() => {
    fetchSummary();

    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .get(`${BACKEND_URL}/api/auth/transactions`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setTransactions(res.data.transactions))
      .catch((err) => console.error("Error fetching transactions:", err));
  }, [BACKEND_URL]);

  const format = (val) =>
    `${Math.floor(val).toLocaleString()}.${(val % 1).toFixed(2).split(".")[1]}`;

  const getMarginClass = (val) => {
    if (val < 1000) return "low";
    if (val < 5000) return "medium";
    return "high";
  };

  const handleFundAction = async () => {
    const token = localStorage.getItem("token");
    if (!token || !amount) return;
    if (
      showModal === "withdraw" &&
      parseFloat(amount) > equityData.marginAvailable
    ) {
      toast.error("Insufficient margin to withdraw");
      return;
    }
    setLoading(true);
    try {
      const endpoint =
        showModal === "add"
          ? `${BACKEND_URL}/api/auth/funds/add`
          : `${BACKEND_URL}/api/auth/funds/withdraw`;

      const res = await axios.post(
        endpoint,
        { amount: parseFloat(amount) },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success(
        `${
          showModal === "add" ? "Added" : "Withdrawn"
        } ₹${amount} successfully`,
        { position: "top-center" }
      );

      setAmount("");
      setShowModal(null);
      fetchSummary(); // refresh equityData
    } catch (err) {
      toast.error("Transaction failed");
      console.error("Fund action error:", err.response ?? err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {showModal && (
        <div className="modal">
          <h3>{showModal === "add" ? "Add Amount" : "Withdraw Amount"}</h3>
          <input
            className="modal-input"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
          <button
            className="btn-modal btn-confirm"
            onClick={handleFundAction}
            disabled={loading || !amount || parseFloat(amount) <= 0}
          >
            {loading ? "Processing..." : "Confirm"}
          </button>
          <button
            className="btn-modal  btn-cancel"
            onClick={() => setShowModal(null)}
          >
            Cancel
          </button>
        </div>
      )}

      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <Link
          className="fund-btn btn-green-add"
          onClick={() => setShowModal("add")}
        >
          Add Amount
        </Link>
        <Link
          className="fund-btn btn-blue-withdraw"
          onClick={() => setShowModal("withdraw")}
        >
          Withdraw
        </Link>
      </div>

      <div className="row">
        <div className="col equity-col">
          <span>
            <p id="equity">Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p
                className={`imp colored ${getMarginClass(
                  equityData.marginAvailable
                )}`}
              >
                {format(equityData.marginAvailable)}
              </p>
              {/* <p className="imp colored">
                {format(equityData.marginAvailable)}
              </p> */}
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">{format(equityData.marginUsed)}</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">{format(equityData.marginAvailable)}</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>{format(equityData.openingBalance)}</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col transaction-col">
          <h4>Recent Transactions</h4>
          <table className="transaction-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount (₹)</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions
                .slice(-10)
                .reverse()
                .map((tx, i) => (
                  <tr key={i}>
                    <td>{tx.type.toUpperCase()}</td>
                    <td>{tx.amount.toLocaleString()}</td>
                    <td>{new Date(tx.timestamp).toLocaleString()}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Funds;
