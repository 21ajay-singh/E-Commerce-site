import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

   try {
  const res = await fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password })
  });

    if (!res.ok) {
      throw new Error("❌ Server error during login.");
    }

    const data= await res.json();
    

    if (data.success) {
      alert(`✅ Welcome back, ${data.user.name}!`);
      navigate("/");
    } else {
      alert("❌ Invalid email or password.");
    }
  }
   catch (error) {
      console.error("Login error:", error);
      alert("⚠️ Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login-page">
      <div className="login-container">
        <div className="login-left">
          <Link className="brand" to="/">
            🛍️ MS Shop
          </Link>
          <p>Welcome back! Log in to explore the latest deals and offers.</p>
          <Link className="brand1" to="/">
            ← Back to Home
          </Link>
        </div>

        <div className="login-right">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>Sign In</h2>

            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="username"
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

            <p className="signup-text">
              Don’t have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
