import React, { useState } from "react";
import axios from "axios";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.category || !formData.price || !formData.image) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/products/add", formData);
      alert("✅ Product added successfully!");
      setFormData({ name: "", category: "", price: "", image: "" });
    } catch (error) {
      alert("❌ Failed to add product.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3 style={styles.title}>➕ Add New Product</h3>
      <div style={styles.grid}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Product Name</label>
          <input
            type="text"
            name="name"
            placeholder="e.g., Classic T-Shirt"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Category</label>
          <input
            type="text"
            name="category"
            placeholder="e.g., T-Shirts"
            value={formData.category}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Price (₹)</label>
          <input
            type="number"
            name="price"
            placeholder="e.g., 999"
            value={formData.price}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Image URL</label>
          <input
            type="text"
            name="image"
            placeholder="e.g., https://example.com/image.jpg"
            value={formData.image}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
      </div>

      <button type="submit" style={styles.button}>Add Product</button>
    </form>
  );
};

const styles = {
  form: {
    padding: "20px",
  },
  title: {
    marginBottom: "20px",
    color: "#444",
    fontWeight: "600",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginBottom: "20px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontWeight: "500",
    marginBottom: "6px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "14px",
    outline: "none",
  },
  button: {
    padding: "12px 20px",
    backgroundColor: "#28a745",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all 0.3s",
  },
};

export default ProductForm;
