import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/CartPage.css";
import Navbar from "../NavbarFooter/Navbar.jsx";
import Footer from "../NavbarFooter/Footer.jsx";

const CartPage = ({ inputRef,focusRef}) => {
  // Sample cart data (replace later with real data from context or state)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      image: "https://via.placeholder.com/100",
      price: 59.99,
      quantity: 1,
    },
    {
      id: 2,
      name: "Smart Watch",
      image: "https://via.placeholder.com/100",
      price: 89.99,
      quantity: 2,
    },
  ]);

  // Update quantity
  const handleQuantityChange = (id, change) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  // Remove item
  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculate totals
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + shipping;

  return (
    <div>
    <Navbar   inputRef={inputRef} focusRef={focusRef}/>
    <section className="cart-page">
      <h1>Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/shop" className="shop-btn">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-container">
          {/* ---------- CART ITEMS ---------- */}
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>

                  <div className="quantity-control">
                    <button onClick={() => handleQuantityChange(item.id, -1)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, 1)}>
                      +
                    </button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ---------- ORDER SUMMARY ---------- */}
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </section>
    <Footer/>
    </div>
  );
};

export default CartPage;
