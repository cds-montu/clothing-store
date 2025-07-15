import { Link, useLocation } from "react-router-dom";
import logo from '../images/logo.png';

export default function Header({ cart }) {
    const location = useLocation();
    const isCartPage = location.pathname === "/cart";
    const cartCount = cart.length;

    return (
        <div style={{
            padding: 20,
            background: "#f8f9fa",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #ddd"
        }}>

            <Link to="/" style={{ textDecoration: "none" }}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#333"
                }}>
                    <img src={logo} alt="logo" style={{ height: "40px" }} />
                    POINT BREAK
                </div>
            </Link>

            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                {isCartPage && (
                    <Link to="/" style={linkStyle}>← Home</Link>
                )}
                <Link to="/cart" style={cartBtnWrapper}>
                    <span style={{ position: "relative", display: "inline-block" }}>
                        🛒
                        {cartCount > 0 && (
                            <span style={badgeStyle}>{cartCount}</span>
                        )}
                    </span>
                    <span style={{ marginLeft: "8px" }}>Cart</span>
                </Link>

            </div>
        </div>
    );
}

const linkStyle = {
    textDecoration: "none",
    color: "#007bff",
    fontWeight: "500",
    fontSize: "16px",
};

const cartBtnWrapper = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "#28a745",
  color: "#fff",
  padding: "8px 14px",
  borderRadius: "6px",
  textDecoration: "none",
  fontSize: "15px",
  fontWeight: "500",
  position: "relative"
};
const badgeStyle = {
    position: "absolute",
    top: "-6px",
    right: "-6px",
    background: "red",
    color: "#fff",
    fontSize: "12px",
    borderRadius: "50%",
    padding: "3px 6px",
};