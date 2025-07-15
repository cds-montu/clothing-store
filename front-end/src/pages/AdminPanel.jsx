import React from "react";
import ProductForm from "../components/ProductForm";
import ProductBulkUpload from "../components/ProductBulkUpload";

const AdminPanel = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🛠️ Admin Panel - Add Products</h2>
      <div style={styles.card}>
        <ProductForm />
      </div>
      <div style={styles.card}>
        <ProductBulkUpload />
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "30px auto",
    padding: "20px",
    fontFamily: "sans-serif",
  },
  heading: {
    marginBottom: "20px",
    color: "#333",
  },
  card: {
    background: "#fff",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    marginBottom: "30px",
  },
};

export default AdminPanel;
