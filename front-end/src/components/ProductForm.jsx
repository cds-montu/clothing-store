import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    image: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    const { name, category, price, image } = formData;
    if (!name || !category || !price || !image) {
      setError("⚠️ Please fill in all fields.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/products/add", formData);
      setMessage("✅ Product added successfully!");
      setFormData({ name: "", category: "", price: "", image: "" });
      dispatch(fetchProducts()); // ✅ Refresh list
    } catch (err) {
      console.error(err);
      setError("❌ Failed to add product.");
    }
  };

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 4, px: 2 }}>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        ➕ Add New Product
      </Typography>

      {message && <Alert severity="success" sx={{ mb: 2 }}>{message}</Alert>}
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Product Name"
              name="name"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Classic T-Shirt"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Category"
              name="category"
              fullWidth
              value={formData.category}
              onChange={handleChange}
              placeholder="e.g., T-Shirts"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Price (₹)"
              name="price"
              type="number"
              fullWidth
              value={formData.price}
              onChange={handleChange}
              placeholder="e.g., 999"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Image URL"
              name="image"
              fullWidth
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="success"
              fullWidth
              sx={{ fontWeight: "bold", py: 1.5 }}
            >
              Add Product
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductForm;
