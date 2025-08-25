import React, { useState, useEffect } from "react";
import axios from "axios";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // NEW

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const DASHBOARD_URL = import.meta.env.VITE_DASHBOARD_URL;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true); // start loading

    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/auth/login`, //  use env
        form
      );

      const { token, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("username", user.username);

      // Redirect to dashboard  with username as query param
      window.location.href = `${DASHBOARD_URL}/?token=${encodeURIComponent(
        token
      )}&username=${encodeURIComponent(user.username)}`;
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false); // stop loading
    }
  };

  return (
    <div className="row mt-3">
      <h1 className="col-6 offset-5 my-5 fs-3">Login</h1>
      <div className="col-6 offset-3">
        <form className="needs-validation" noValidate onSubmit={handleSubmit}>
          {error && (
            <div className="alert alert-danger text-center">{error}</div>
          )}

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-control"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              name="password"
              id="password"
              type="password"
              className="form-control"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
