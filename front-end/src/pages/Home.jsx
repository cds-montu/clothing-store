import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p style={statusStyle}>Loading...</p>;
  if (error) return <p style={statusStyle}>Error loading products</p>;

  return (
    <div style={wrapperStyle}>
      <div style={gridStyle}>
        {items.map((product) => (
          <div
            key={product.id}
            style={cardStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "#333" }}>
              <img
                src={product.image}
                alt={product.name}
                style={imgStyle}
              />
              <div style={textWrapper}>
                <h3 style={titleStyle}>{product.name}</h3>
                <p style={categoryStyle}>{product.category}</p>
                <p style={priceStyle}>₹{product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

// 🔧 Styles
const wrapperStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "40px 20px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
};

const cardStyle = {
  background: "#fff",
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease",
};

const imgStyle = {
  width: "100%",
  height: "260px",
  objectFit: "cover",
};

const textWrapper = {
  padding: "12px",
};

const titleStyle = {
  fontSize: "16px",
  fontWeight: "600",
  margin: "6px 0",
};

const categoryStyle = {
  fontSize: "13px",
  color: "#888",
  marginBottom: "4px",
};

const priceStyle = {
  fontSize: "14px",
  fontWeight: "bold",
};

const statusStyle = {
  textAlign: "center",
  marginTop: "60px",
  fontSize: "18px",
  color: "#555",
};

export default Home;
