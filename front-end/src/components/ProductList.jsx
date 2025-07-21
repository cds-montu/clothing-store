import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "50px", fontSize: "18px", color: "#777" }}>
        No products found.
      </div>
    );
  }

  return (
    <div
      className="products-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
