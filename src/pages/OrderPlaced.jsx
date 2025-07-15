import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

export default function OrderPlaced() {
  const { state } = useLocation();
  const form = state?.form;

  // Disable scrolling on mount
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto"; // Restore on unmount
    };
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.successIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#28a745"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>

        <h2 style={styles.heading}>Your Order is Confirmed!</h2>
        <p style={styles.subtext}>
          Thanks <b>{form?.name}</b>! We've received your order and it's being processed.
        </p>

        <div style={styles.detailBox}>
          <p><span>📦 Delivery To:</span><br />{form?.address}</p>
          <p><span>💳 Payment Method:</span><br />
            {form?.payment === "upi"
              ? `UPI (${form?.upi})`
              : "Cash on Delivery"}
          </p>
        </div>

        <Link to="/" style={styles.homeBtn}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}


const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #e8f0ff, #f8faff)",
    overflow: "hidden", // Prevent scroll inside component
  },
  card: {
    backgroundColor: "#fff",
    padding: "40px 30px",
    borderRadius: "14px",
    boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
    textAlign: "center",
    maxWidth: "480px",
    width: "100%",
  },
  successIcon: {
    marginBottom: "20px",
  },
  heading: {
    fontSize: "26px",
    marginBottom: "10px",
    color: "#222",
  },
  subtext: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "25px",
  },
  detailBox: {
    background: "#f1f5ff",
    padding: "15px 20px",
    borderRadius: "10px",
    color: "#333",
    fontSize: "15px",
    textAlign: "left",
    lineHeight: "1.6",
    marginBottom: "25px",
  },
  homeBtn: {
    display: "inline-block",
    padding: "12px 24px",
    backgroundColor: "#28a745",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    transition: "background 0.3s ease-in-out",
  },
};
