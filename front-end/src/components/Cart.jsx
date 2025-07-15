import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div style={{ padding:"2rem", maxWidth:"800px", margin:"auto" }}>
      <h2>🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <>
          {cart.map((i) => (
            <div key={i.id} style={{
              display:"flex", gap:"15px", alignItems:"center",
              marginBottom:"20px", padding:"15px",
              border:"1px solid #ddd", borderRadius:"8px"
            }}>
              <img src={i.image} alt="" style={{ width:"80px", height:"80px", objectFit:"cover" }} />
              <div style={{ flex:1 }}>
                <h4>{i.name}</h4>
                <p>₹{i.price}</p>
                <div style={{ display:"flex", gap:"10px", alignItems:"center" }}>
                  <button onClick={() => dispatch(decrementQuantity(i.id))}>−</button>
                  <span>{i.quantity}</span>
                  <button onClick={() => dispatch(incrementQuantity(i.id))}>+</button>
                  <button onClick={() => dispatch(removeFromCart(i.id))} style={{
                    background:"#dc3545", color:"#fff", border:"none",
                    padding:"5px 10px", cursor:"pointer"
                  }}>Remove</button>
                </div>
              </div>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
          <button onClick={() => nav("/checkout")} style={{
            padding:"10px 20px", background:"#007bff",
            color:"#fff", border:"none", cursor:"pointer"
          }}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
}
