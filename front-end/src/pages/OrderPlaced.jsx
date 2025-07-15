import { useLocation, Link } from "react-router-dom";

export default function OrderPlaced() {
  const { state } = useLocation();
  const name = state?.name || "Customer";

  return (
    <div style={{ padding:"2rem", textAlign:"center" }}>
      <h3>✅ Order Confirmed!</h3>
      <p>Thank you, <b>{name}</b>! Your order is on its way.</p>
      <Link to="/" style={{
        marginTop:"20px", display:"inline-block",
        padding:"10px 20px", background:"#007bff",
        color:"#fff", textDecoration:"none", borderRadius:"4px"
      }}>Go to Home</Link>
    </div>
  );
}
