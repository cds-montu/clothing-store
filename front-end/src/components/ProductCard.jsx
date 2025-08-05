import { useDispatch, useSelector } from "react-redux";
import { addToCart, incrementQuantity, decrementQuantity } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const item = cart.find((i) => i.id === product.id);

  return (
    <div style={styles.card}>
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "#333" }}>
        <div style={styles.imageWrapper}>
          <img
            src={product.image || "https://via.placeholder.com/200"}
            alt={product.name}
            style={styles.image}
          />
        </div>
        <h3 style={styles.name}>{product.name}</h3>
      </Link>

      <p style={styles.price}>₹{product.price}</p>

      {item ? (
        <div style={styles.counter}>
          <button style={styles.qtyBtn} onClick={() => dispatch(decrementQuantity(product.id))}>−</button>
          <span style={styles.qty}>{item.quantity}</span>
          <button style={styles.qtyBtn} onClick={() => dispatch(incrementQuantity(product.id))}>+</button>
        </div>
      ) : (
        <button
          onClick={() => dispatch(addToCart(product))}
          style={styles.addButton}
        >
          🛒 Add to Cart
        </button>
      )}
    </div>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "20px",
    padding: "20px",
    maxWidth: "1200px",
    margin: "auto",
  },
  card: {
    borderRadius: "12px",
    padding: "16px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "transform 0.3s",
  },
  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  details: {
    textAlign: "center",
    marginTop: "12px",
  },
  title: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "6px",
  },
  category: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "6px",
  },
  price: {
    fontSize: "16px",
    color: "#ff4081",
    fontWeight: "500",
    margin: "6px 0",
  },
  addButton: {
    backgroundColor: "#ff4081",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "10px 18px",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
    transition: "background 0.3s ease",
  },
  counter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    marginTop: "10px",
  },
  qtyBtn: {
    fontSize: "18px",
    backgroundColor: "#f0f0f0",
    border: "1px solid #ccc",
    padding: "6px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  qty: {
    fontWeight: "bold",
    fontSize: "16px",
  },
  empty: {
    textAlign: "center",
    width: "100%",
    fontSize: "18px",
    padding: "50px",
    color: "#888",
  },
};

export default ProductCard;
