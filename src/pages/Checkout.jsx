import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout({ updateCart }) {
  const [form, setForm] = useState({ name: "", address: "", payment: "", upi: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.address || !form.payment || (form.payment === "upi" && !form.upi)) {
      alert("Please fill all required fields.");
      return;
    }

    updateCart([]); 
    navigate("/order-placed", { state: { form } });
  };

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "auto" }}>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <textarea
          name="address"
          placeholder="Delivery Address"
          value={form.address}
          onChange={handleChange}
          required
          style={{ ...inputStyle, height: "80px" }}
        />

        <div>
          <label><b>Select Payment Method:</b></label><br />
          <label><input type="radio" name="payment" value="cod" onChange={handleChange} /> Cash on Delivery</label><br />
          <label><input type="radio" name="payment" value="upi" onChange={handleChange} /> UPI</label>
        </div>

        {form.payment === "upi" && (
          <input
            type="text"
            name="upi"
            placeholder="Enter UPI ID"
            value={form.upi}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        )}

        <button type="submit" style={btnStyle}>Confirm Order</button>
      </form>
    </div>
  );
}

const inputStyle = {
  padding: "10px",
  fontSize: "16px",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

const btnStyle = {
  padding: "12px",
  fontSize: "16px",
  backgroundColor: "#28a745",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};
