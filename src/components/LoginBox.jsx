import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginBox.css";

const LoginBox = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with: ${formData.email}`);
  };

  return (
    <section className="login-section">
      <div className="login-card">
        <h2>Welcome Back 👋</h2>
        <p className="muted">Log in to continue bidding</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Log In
          </button>
        </form>

        <div className="login-footer">
          <Link to="/forgot-password">Forgot password?</Link>
          <p>
            New here? <Link to="/register">Create account</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginBox;