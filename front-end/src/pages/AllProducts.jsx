import { useDispatch, useSelector } from "react-redux";
import { addToCart, incrementQuantity, decrementQuantity } from "../redux/slices/cartSlice";

export default function ProductList({ products }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <div style={styles.container}>
      {products.map((product) => {
        const item = cart.find((i) => i.id === product.id);
        return (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.name} style={styles.image} />

            <div style={styles.details}>
              <h3 style={styles.title}>{product.name}</h3>
              <p style={styles.category}>{product.category} - ₹{product.price}</p>

              {item ? (
                <div style={styles.counter}>
                  <button style={styles.btn} onClick={() => dispatch(decrementQuantity(product.id))}>−</button>
                  <span style={styles.qty}>{item.quantity}</span>
                  <button style={styles.btn} onClick={() => dispatch(incrementQuantity(product.id))}>+</button>
                </div>
              ) : (
                <button style={styles.addBtn} onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    maxWidth: "800px",
    margin: "auto",
  },
  card: {
    display: "flex",
    backgroundColor: "#fff",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
  },
  image: {
    width: "180px",
    height: "180px",
    objectFit: "cover",
  },
  details: {
    padding: "16px",
    flex: 1,
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "6px",
  },
  category: {
    color: "#555",
    fontSize: "14px",
    marginBottom: "10px",
  },
  addBtn: {
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "8px 16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  counter: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  btn: {
    fontSize: "18px",
    backgroundColor: "#f0f0f0",
    border: "none",
    padding: "6px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  qty: {
    fontWeight: "bold",
    fontSize: "16px",
  },
};
