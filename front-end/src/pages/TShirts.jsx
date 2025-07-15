import React from "react";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";

const Home = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🔥 Trending Products</h2>
      <div style={styles.grid}>
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "25px",
  },
};

export default Home;
