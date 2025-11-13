import React from "react";
import { Link } from "react-router-dom";
import "../styles/AboutPage.css";
import Navbar from "../NavbarFooter/Navbar.jsx";
import Footer from "../NavbarFooter/Footer.jsx";

const AboutPage = ({inputRef,focusRef}) => {
  return (
    <div>
    <Navbar   inputRef={inputRef} focusRef={focusRef}/>
    <section className="about-page">
      {/* ---------- HERO SECTION ---------- */}
      <div className="about-hero">
        <h1>About <span>MS Shop</span></h1>
        <p>
          Your trusted destination for everything you need — from gadgets to groceries.
          We bring quality, affordability, and speed together under one roof.
        </p>
        <Link to="/shop" className="hero-btn">Shop Now</Link>
      </div>

      {/* ---------- OUR MISSION SECTION ---------- */}
      <div className="about-mission">
        <h2>Our Mission</h2>
        <p>
          At <strong>MS Shop</strong>, our mission is simple — <em>
          “To make quality products accessible to everyone, faster than others.”</em>  
          We strive to deliver every order within <b>2–3 days</b> because we believe time is as valuable as money.
        </p>
      </div>

      {/* ---------- BRAND STORY SECTION ---------- */}
      <div className="about-story">
        <h2>Our Story</h2>
        <p>
          Founded in <b>2025</b> by a small team of four passionate friends, <strong>MS Shop</strong> was born from a simple yet powerful idea — 
          to create an online marketplace that truly puts customers first.  
          We started by observing how major platforms often compromise on delivery speed or product quality, and we wanted to change that.
        </p>
        <p>
          What began as a small vision in a single room has evolved into a mission to redefine how people shop online — 
          with a platform that’s <b>fast, fair, and future-focused</b>.  
          Our dream is to empower every household in India with easy access to top-quality products at lightning-fast delivery speeds.
        </p>
      </div>

      {/* ---------- WHY CHOOSE US ---------- */}
      <div className="why-choose">
        <h2>Why Choose Us?</h2>
        <div className="why-cards">
          <div className="card">
            <h3>🚚 2–3 Day Delivery</h3>
            <p>We pride ourselves on delivering your products faster than anyone else.</p>
          </div>
          <div className="card">
            <h3>💎 Quality Assured</h3>
            <p>Every product is verified to ensure it meets the highest quality standards.</p>
          </div>
          <div className="card">
            <h3>🤝 Customer First</h3>
            <p>Your satisfaction is our top priority — every order, every time.</p>
          </div>
          <div className="card">
            <h3>🌍 Wide Product Range</h3>
            <p>From electronics to fashion, find everything you need in one place.</p>
          </div>
        </div>
      </div>

      {/* ---------- TEAM SECTION ---------- */}
      <div className="about-team">
        <h2>Meet Our Team</h2>
        <p>
          We’re a team of <b>four passionate creators</b> — driven by innovation, dedication, and the belief 
          that great service starts with great people.
        </p>
        <div className="team-members">
          <div className="member-card">
            <img src="images\aj.jpg" alt="Team member" />
            <h4>Ajay Singh Rajpurohit</h4>
            <p>Founder & CEO</p>
          </div>
          <div className="member-card">
            <img src="images\WhatsApp Image 2025-10-31 at 15.58.39_24a34419.jpg" alt="Team member" />
            <h4>Sunita Yadav</h4>
            <p>Operations</p>
          </div>
          <div className="member-card">
            <img src="images\WhatsApp Image 2025-10-31 at 16.00.41_9a49d728.jpg" alt="Team member" />
            <h4>Anurag Pandey</h4>
            <p>Technology</p>
          </div>
          <div className="member-card">
            <img src="images\WhatsApp Image 2025-10-31 at 15.57.27_1fc74931.jpg" alt="Team member" />
            <h4>Aman Yogi</h4>
            <p>Marketing</p>
          </div>
        </div>
      </div>

      {/* ---------- CALL TO ACTION ---------- */}
      <div className="about-cta">
        <h2>Join Our Journey</h2>
        <p>We’re growing fast — and we’d love for you to be a part of our story.</p>
        <Link to="/shop" className="cta-btn">Start Shopping</Link>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default AboutPage;
