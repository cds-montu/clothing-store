import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const [form, setForm] = useState({ name: "", address: "" });
  const dispatch = useDispatch();
  const nav = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    dispatch(clearCart());
    nav("/order-placed", { state: { name: form.name } });
  };

  return (
    <div style={{ padding:"2rem", maxWidth:"600px", margin:"auto" }}>
      <h2>Checkout</h2>
      <form onSubmit={submit} style={{ display:"flex", flexDirection:"column", gap:"15px" }}>
        <input name="name" placeholder="Your Name" value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={{ padding:"10px" }} required />
        <textarea name="address" placeholder="Delivery Address" value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          style={{ padding:"10px" }} rows={3} required />
        <button type="submit" style={{
          padding:"12px", background:"#28a745", color:"#fff",
          border:"none", cursor:"pointer"
        }}>Confirm Order</button>
      </form>
    </div>
  );
}
