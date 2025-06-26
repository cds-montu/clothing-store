import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

export default function OrderPlaced() {
  const { state } = useLocation();
  const form = state?.form;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h1 style={styles.title}>Order Successfully Placed</h1>
          <p style={styles.subtitle}>
            Thank you <b>{form?.name}</b>! We’re getting your order ready.
          </p>
        </div>

        <div style={styles.details}>
          <div style={styles.row}>
            <label>Delivery Address</label>
            <p>{form?.address}</p>
          </div>
          <div style={styles.row}>
            <label>Payment Method</label>
            <p>{form?.payment === "upi" ? `UPI (${form?.upi})` : "Cash on Delivery"}</p>
          </div>
        </div>

        <Link to="/" style={styles.button}>
          Return to Home
        </Link>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    height: "100vh",
    width: "100vw",
    background: "linear-gradient(to right, #e0f2ff, #f6fbff)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    padding: "20px",
  },
  card: {
    background: "#ffffff",
    borderRadius: "16px",
    padding: "40px 32px",
    width: "100%",
    maxWidth: "460px",
    boxShadow: "0 12px 35px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
  },
  icon: {
    backgroundColor: "#28a745",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto 16px auto",
  },
  title: {
    fontSize: "24px",
    color: "#222",
    marginBottom: "6px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#555",
  },
  details: {
    width: "100%",
    backgroundColor: "#f1f7ff",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "25px",
    lineHeight: "1.5",
  },
  row: {
    marginBottom: "16px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "12px 28px",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "600",
    transition: "background 0.3s ease",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },
};
