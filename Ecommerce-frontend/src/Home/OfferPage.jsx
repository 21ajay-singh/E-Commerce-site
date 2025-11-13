import React from "react";
import { Link } from "react-router-dom";
import"../styles/OfferPage.css"
import Navbar from "../NavbarFooter/Navbar.jsx";
import Footer from "../NavbarFooter/Footer.jsx";

const OffersPage = ({ inputRef,focusRef}) => {
  const offers = [
    {
      id: 1,
      title: "🎉 Flash Sale – 50% Off on Electronics!",
      description: "Grab the hottest gadgets at half price before midnight!",
      image: "https://via.placeholder.com/400x200?text=Electronics+Sale",
      link: "/shop/electronics",
    },
    {
      id: 2,
      title: "🛍️ Fashion Fest – Buy 2 Get 1 Free",
      description: "Trendy apparel & accessories at unbelievable prices.",
      image: "https://via.placeholder.com/400x200?text=Fashion+Sale",
      link: "/shop/fashion",
    },
    {
      id: 3,
      title: "📱 Mobile Bonanza – Up to ₹10,000 Off",
      description: "Top smartphones on mega discounts!",
      image: "https://via.placeholder.com/400x200?text=Mobile+Bonanza",
      link: "/shop/mobiles",
    },
    {
      id: 4,
      title: "🏠 Home Essentials – Flat 40% Off",
      description: "Upgrade your home with top-rated essentials.",
      image: "https://via.placeholder.com/400x200?text=Home+Essentials",
      link: "/shop/home",
    },
  ];

  return (

    <div>
        <Navbar   inputRef={inputRef} focusRef={focusRef}/>
    <section className="offers-page">
      <h2>🔥 Exclusive Offers & Deals</h2>
      <p>Grab limited-time deals before they’re gone!</p>

      {/* ---------- SCROLLABLE OFFER CAROUSEL ---------- */}
      <div className="offers-scroll">
        {offers.map((offer) => (
          <div className="offer-card" key={offer.id}>
            <img src={offer.image} alt={offer.title} />
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            <Link to={offer.link}>Shop Now</Link>
          </div>
        ))}
      </div>

      {/* ---------- ALL OFFERS GRID ---------- */}
      <div className="offers-grid">
        {offers.map((offer) => (
          <div className="offer-card" key={`grid-${offer.id}`}>
            <img src={offer.image} alt={offer.title} />
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            <Link to={offer.link}>Explore</Link>
          </div>
        ))}
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default OffersPage;
