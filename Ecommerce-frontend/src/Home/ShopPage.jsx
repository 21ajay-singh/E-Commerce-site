import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../NavbarFooter/Navbar.jsx";
import Footer from "../NavbarFooter/Footer.jsx";
import "../styles/ShopPage.css";


const ShopPage = ({ inputRef,focusRef}) => {
  const [sortOption, setSortOption] = useState("default");
  const [products, setProducts] = useState([]);

  useEffect(() => {
        Categories();
        Products();
    }, []);

  async function Products(){
        const url=("http://localhost:3000/products")
        let response=await fetch(url);
        response=await response.json();
        setProducts(response);
    }

  const [categories, setCategories] = useState([]);
  async function Categories(){
    const url=("http://localhost:3000/types")
    let response=await fetch(url);
    response=await response.json();
    setCategories(response);
  }

  return (
    <div>
      <Navbar  inputRef={inputRef} focusRef={focusRef} />
        

      {/* ---------- MAIN CONTENT ---------- */}
      <main>

        {/* ---------- PAGE TITLE ---------- */}
        <section className="shop-page">
          <h2>Shop</h2>
          <p>Find the perfect product for you</p>
        </section>

        {/* ---------- FILTER & SORT BAR ---------- */}
        <section className="filter-sort-bar">
          <div>
            <button>
              All
            </button>
            {categories.map((type)=>
            <button key={type.name}>
              {type.name}
            </button>)}
          </div>

          <div>
            <label>
              Sort by:
            </label>
            <select>
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name</option>
            </select>
          </div>
        </section>

        {/* ---------- PRODUCTS GRID ---------- */}
        <section className="products-grid">
          {products.map((p) => (
            <div
              className="product-card"key={p.id}>
              <img
                src={p.image}
                alt={p.name}
              />
              <div>
                <h4>{p.name}</h4>
                <p>₹{p.price}</p>
                <button>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </section>

      </main>

      {/* ---------- FOOTER ---------- */}
      <Footer />
    </div>
  );
};

export default ShopPage;
