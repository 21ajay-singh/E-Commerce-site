import React from "react";
import "../styles/ContactPage.css";
import Navbar from "../NavbarFooter/Navbar.jsx";
import Footer from "../NavbarFooter/Footer.jsx";


const ContactPage = ({inputRef,focusRef}) => {
  return (
    <div>
        <Navbar  inputRef={inputRef} focusRef={focusRef}/>
    <section className="contact-page">
      {/* ---------- HERO SECTION ---------- */}
      <div className="contact-hero">
        <h1>Contact <span>MS Shop</span></h1>
        <p>We’d love to hear from you! Fill out the form below or reach out through the provided details.</p>
      </div>

      {/* ---------- CONTACT FORM SECTION ---------- */}
      <div className="contact-container">
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="input-group">
              <label>Name</label>
              <input type="text" placeholder="" />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="" />
            </div>

            <div className="input-group">
              <label>Subject</label>
              <input type="text" placeholder="" />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea rows="5" placeholder=""></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* ---------- CONTACT INFO (EMPTY PLACEHOLDER) ---------- */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>📍 Address: Not decided yet </p>
          <p>📞 Phone: +91-7737275640 </p>
          <p>📧 Email: ajaypurohit69007@gmail.com </p>
          <p>🕓 Working Hours: 24/7 </p>
        </div>
      </div>

      {/* ---------- MAP PLACEHOLDER ---------- */}
      {/* <div className="contact-map"> */}
        {/* You can later embed a Google Map iframe here */}
       {/* </div> */}
    </section>
        <Footer/>
    </div>
  );
};

export default ContactPage;
