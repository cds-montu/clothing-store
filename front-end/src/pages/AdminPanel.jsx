import React, { useEffect } from "react";
import ProductForm from "../components/ProductForm";
import ProductBulkUpload from "../components/ProductBulkUpload";
import { Box, Typography, Container, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";

const MotionBox = motion(Box);

const AdminPanel = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts()); // ✅ Fetch once on load
  }, [dispatch]);

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        sx={{
          textAlign: "center",
          mb: 4,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: "#ff4081", mb: 1 }}
        >
          🛠️ Admin Panel
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "#555" }}>
          Add or Upload Products to Your Store
        </Typography>
      </MotionBox>

      <Paper
        elevation={4}
        sx={{
          mb: 5,
          p: 4,
          borderRadius: 3,
          backgroundColor: "#fff0f5",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ mb: 2, color: "#ad1457" }}
        >
          ➕ Add Single Product
        </Typography>
        <ProductForm />
      </Paper>

      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 3,
          backgroundColor: "#fce4ec",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ mb: 2, color: "#ad1457" }}
        >
          📦 Bulk Upload Products
        </Typography>
        <ProductBulkUpload />
      </Paper>
    </Container>
  );
};

export default AdminPanel;
