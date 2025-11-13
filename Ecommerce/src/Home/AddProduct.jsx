import React, { useState } from "react";
import "../styles/AddProduct.css";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    brand: "",
    imageUrl: "",
    stockQuantity: "",
    active: true,
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/addProduct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...product,
          price: parseFloat(product.price),
          stockQuantity: parseInt(product.stockQuantity, 10),
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      console.log("✅ Product added:", data);
      setStatus("✅ Product added successfully!");
      setProduct({
        name: "",
        description: "",
        price: "",
        category: "",
        brand: "",
        imageUrl: "",
        stockQuantity: "",
        active: true,
      });
    } catch (error) {
      console.error("Error adding product:", error);
      setStatus("❌ Failed to add product. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Handle form reset
  const handleReset = () => {
    setProduct({
      name: "",
      description: "",
      price: "",
      category: "",
      brand: "",
      imageUrl: "",
      stockQuantity: "",
      active: true,
    });
    setStatus("");
  };

  return (
    <div className="add-product-container">
      <h2>Add New Product</h2>
      <p className="info-text">
        Fill out the form below to add a new product to the database.
      </p>

      <form className="add-product-form" onSubmit={handleSubmit}>
        <div className="grid">
          <div>
            <label>Product Name *</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Brand</label>
            <input
              type="text"
              name="brand"
              value={product.brand}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Price (INR) *</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Stock Quantity *</label>
            <input
              type="number"
              name="stockQuantity"
              value={product.stockQuantity}
              onChange={handleChange}
              required
            />
          </div>

          <div className="full">
            <label>Description</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div>
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Image URL</label>
            <input
              type="text"
              name="imageUrl"
              value={product.imageUrl}
              onChange={handleChange}
              placeholder="image"
            />
          </div>

          <div className="checkbox">
            <input
              type="checkbox"
              name="active"
              checked={product.active}
              onChange={handleChange}
            />
            <label>Active (Visible)</label>
          </div>
        </div>

        <div className="actions">
          <button type="submit" disabled={loading}>
            {loading ? "Adding..." : "Add Product"}
          </button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>

      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default AddProduct;
