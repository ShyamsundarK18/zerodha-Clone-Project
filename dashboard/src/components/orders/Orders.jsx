// src/components/orders/Orders.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Orders.css";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    axios
      .get(`${BACKEND_URL}/allOrders`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setOrders(res.data || []);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err.response ?? err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading orders...</p>;

  if (!orders || orders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any order invest IQ to buy stocks</p>
          <Link to={"/"} className="btn-order">
            Buy stock
          </Link>
        </div>
      </div>
    );
  }

  const modeCounts = orders.reduce((acc, order) => {
    acc[order.mode] = (acc[order.mode] || 0) + 1;
    return acc;
  }, {});

  const generateColors = (count, opacity = 0.5) =>
    Array.from(
      { length: count },
      (_, i) => `hsl(${(i * 137.5) % 360}, 70%, 60%, ${opacity})`
    );

  return (
    <div className="orders">
      <h3>Your Orders</h3>
      <div className="orders-table">
        <table className="order-table">
          <thead>
            <tr>
              <th>Stock</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Mode</th>
              <th>Placed At</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{(order.price ?? 0).toFixed(2)}</td>
                <td>{order.mode}</td>
                <td>
                  {new Date(
                    order.createdAt ?? order._id?.getTimestamp?.() ?? Date.now()
                  ).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
