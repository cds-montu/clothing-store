import { useNavigate, useParams } from "react-router-dom";
import { PRODUCTS } from "../data/products";

export default function ProductDetail({ cart, updateCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === parseInt(id));

  const handleAdd = () => {
    updateCart([...cart, product]);
  };

  if (!product) return <p style={{ padding: "20px" }}>Product not found</p>;

  return (
    <div style={{ padding: "40px", maxWidth: "1000px", margin: "auto" }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          background: "none",
          border: "none",
          color: "#007bff",
          fontSize: "16px",
          marginBottom: "20px",
          cursor: "pointer"
        }}
      >
        ← Back
      </button>
      
      <div style={{
        display: "flex",
        gap: "30px",
        padding: "40px",
        maxWidth: "1000px",
        margin: "auto",
        alignItems: "flex-start"
      }}>
        <img src={product.image} alt={product.name}
          style={{
            width: "400px",
            height: "auto",
            borderRadius: "10px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          }}
        />

        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>{product.name}</h2>
          <h4 style={{ color: "#28a745", fontSize: "1.4rem" }}>₹{product.price}</h4>
          <p style={{ margin: "20px 0", color: "#555" }}>
            Experience unmatched comfort and timeless style with our premium <b>{product.name}</b>,
            expertly crafted from high-quality fabric. Designed for everyday elegance,
            this piece blends durability, sophistication, and comfort — perfect for any occasion, every season.
          </p>

          <button
            onClick={handleAdd}
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
}
