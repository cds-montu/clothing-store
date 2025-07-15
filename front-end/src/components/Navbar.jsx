import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const totalQty = useSelector(state => state.cart.reduce((sum, i) => sum + i.quantity, 0));
  return (
    <nav style={{ display:'flex', justifyContent:'space-between', padding:'10px 20px', background:'#fff', boxShadow:'0 2px 5px rgba(0,0,0,0.1)' }}>
      <div>
        <Link to="/" style={{ textDecoration:'none', fontSize:'20px', fontWeight:'bold', color:'#333' }}>POINT BREAK</Link>
      </div>
      <div style={{ display:'flex', gap:'15px' }}>
        {/* <Link to="/home">Home</Link> */}
        <Link to="/admin">Admin Panel</Link>
        <Link to="/new-arrivals">New Arrivals</Link>
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/tshirts">T-Shirts</Link>
        <Link to="/shirts">Shirts</Link>
        <Link to="/top-bottom">Top & Bottom</Link>
        <Link to="/cart">🛒 Cart ({totalQty})</Link>
      </div>
    </nav>
  );
}
