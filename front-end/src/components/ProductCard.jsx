import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/slices/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const item = useSelector((state) =>
    state.cart.find((i) => i.id === product.id)
  );

  return (
    <div
      className="product-card"
      style={styles.card}
    >
      <Link
        to={`/product/${product.id}`}
        style={{ textDecoration: "none", color: "#333" }}
      >
        <div style={styles.imageWrapper}>
          <img src={product.image} alt={product.name} style={styles.image} />
        </div>
        <h3 style={styles.name}>{product.name}</h3>
      </Link>

      <p style={styles.price}>₹{product.price}</p>

      {item ? (
        <div style={styles.counter}>
          <button style={styles.qtyBtn} onClick={() => dispatch(decrementQuantity(product.id))}>
            −
          </button>
          <span style={styles.qty}>{item.quantity}</span>
          <button style={styles.qtyBtn} onClick={() => dispatch(incrementQuantity(product.id))}>
            +
          </button>
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
}

const styles = {
  card: {
    borderRadius: "12px",
    padding: "16px",
    textAlign: "center",
    backgroundColor: "#fff",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
  },
  imageWrapper: {
    overflow: "hidden",
    borderRadius: "10px",
  },
  image: {
    width: "100%",
    height: "260px",
    objectFit: "cover",
    transition: "transform 0.4s ease",
  },
  name: {
    fontSize: "16px",
    fontWeight: "600",
    marginTop: "12px",
  },
  price: {
    fontSize: "15px",
    color: "#007bff",
    fontWeight: "500",
    marginTop: "6px",
  },
  addButton: {
    marginTop: "12px",
    backgroundColor: "#ff5722",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "10px 16px",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
  counter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    marginTop: "10px",
  },
  qtyBtn: {
    padding: "6px 10px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "6px",
    backgroundColor: "#eee",
    border: "1px solid #ccc",
    cursor: "pointer",
  },
  qty: {
    fontWeight: "bold",
    fontSize: "15px",
  },
};
