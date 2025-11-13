import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/SignupPage.css";

const SignupPage = () => {
  const navigate=useNavigate();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    gender: "",
    dob: "",
    agree: false,
  });

 
  
  const handleChange = async (e) => {    
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
};

const postingData=async()=>{
   const url="http://localhost:8080/signup";
    const userData=await fetch(url,{method:"POST",
    body:JSON.stringify(formData),
    headers:{"Content-Type":"application/json"},
    });
    alert(`🎉 Welcome, ${formData.name}!, now login to your account`);
}

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }
    if (!formData.agree) {
      alert("⚠️ Please agree to the terms and conditions.");
      return;
    }


      postingData();
      navigate("/login");   
  };

  return (
    <section className="signup-page">
      <div className="signup-container">
        <div className="signup-left">
          <Link to={"/"} className="brand">🛍️ MS Shop</Link>
          <p>Join the MS family and enjoy exclusive offers and member-only rewards.</p>
        </div>

        <div className="signup-right">
          <form className="signup-form" onSubmit={handleSubmit}>
            <h2>Create Your Account</h2>

            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Enter your full name"
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                placeholder="Enter your phone number"
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                placeholder="Create a password"
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                placeholder="Confirm your password"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-inline">
              <div className="input-group-inline">
                <label>Gender</label>
                <select name="gender" value={formData.gender} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="input-group-inline">
                <label>Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="checkbox">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
              />
              <div className="button-inline">
              <label>
                I agree to the <Link to="/terms">Terms & Conditions</Link>
              </label>
            </div>

            <button type="submit">Sign Up</button></div>

            <p className="login-text">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
