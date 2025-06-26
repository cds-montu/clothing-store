import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product, cart, updateCart }) {
  const [qty, setQty] = useState(0);

  useEffect(() => {
    const count = cart.filter((item) => item.id === product.id).length;
    setQty(count);
  }, [cart, product.id]);

  const handleAdd = () => updateCart([...cart, product]);

  const handlePlus = () => updateCart([...cart, product]);

  const handleMinus = () => {
    const index = cart.findIndex((i) => i.id === product.id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      updateCart(newCart);
    }
  };

  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "15px",
      width: "250px",
      backgroundColor: "#fff",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
    }}>
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img src={product.image} alt={product.name}
          style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "8px" }} />
        <h3 style={{ marginTop: "10px" }}>{product.name}</h3>
      </Link>

      <p>₹{product.price}</p>

      {qty === 0 ? (
        <button
          onClick={handleAdd}
          style={btnStyle}
        >
          Add to Cart
        </button>
      ) : (
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          marginTop: "10px"
        }}>
          <button onClick={handleMinus} style={qtyBtn}>−</button>
          <span>{qty}</span>
          <button onClick={handlePlus} style={qtyBtn}>+</button>
        </div>
      )}
    </div>
  );
}

const btnStyle = {
  marginTop: "10px",
  padding: "8px 16px",
  backgroundColor: "#28a745",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "14px"
};

const qtyBtn = {
  padding: "6px 12px",
  fontSize: "16px",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#007bff",
  color: "#fff",
  cursor: "pointer"
};
