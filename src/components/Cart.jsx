import { useNavigate } from "react-router-dom";

export default function Cart({ cart, updateCart }) {
  const navigate = useNavigate();

  const handleAdd = (item) => updateCart([...cart, item]);
  const handleRemoveOne = (item) => {
    const index = cart.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      updateCart(newCart);
    }
  };
  const handleRemoveAll = (item) => {
    const newCart = cart.filter((i) => i.id !== item.id);
    updateCart(newCart);
  };

  const grouped = cart.reduce((acc, item) => {
    acc[item.id] = acc[item.id]
      ? { ...acc[item.id], qty: acc[item.id].qty + 1 }
      : { ...item, qty: 1 };
    return acc;
  }, {});

  const total = Object.values(grouped).reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <div style={{ padding: "30px", maxWidth: "800px", margin: "auto" }}>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "20px" }}>🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p style={{ color: "#777", fontSize: "1.1rem" }}>Cart is empty.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {Object.values(grouped).map((item) => (
            <div key={item.id} style={{
              display: "flex", alignItems: "center", gap: "15px",
              border: "1px solid #ddd", padding: "15px", borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
            }}>
              <img src={item.image} alt={item.name}
                style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px" }} />
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: 0 }}>{item.name}</h4>
                <p style={{ color: "#666", fontSize: "14px" }}>₹{item.price}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "5px" }}>
                  <button onClick={() => handleRemoveOne(item)} style={btnStyle}>−</button>
                  <span>{item.qty}</span>
                  <button onClick={() => handleAdd(item)} style={btnStyle}>+</button>
                  <button onClick={() => handleRemoveAll(item)} style={{ ...btnStyle, backgroundColor: "#dc3545" }}>Remove</button>
                </div>
              </div>
            </div>
          ))}
          <hr />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h3 style={{ fontSize: "1.3rem" }}>Total: ₹{total}</h3>
            <button
              onClick={() => navigate("/checkout")}
              style={{
                backgroundColor: "#28a745", color: "#fff", padding: "10px 20px",
                border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "16px"
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const btnStyle = {
  padding: "6px 12px", backgroundColor: "#28a745", color: "#fff",
  border: "none", borderRadius: "5px", cursor: "pointer"
};
