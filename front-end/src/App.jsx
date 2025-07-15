import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import Checkout from "./pages/Checkout";
import OrderPlaced from "./pages/OrderPlaced";
import NewArrivals from "./pages/NewArrivals";
import Men from "./pages/Men";
import Women from "./pages/Women";
import TopBottomWear from "./pages/TopBottomWear";
import TShirts from "./pages/TShirts";
import Shirts from "./pages/Shirts";
import AdminPanel from "./pages/AdminPanel";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/top-bottom" element={<TopBottomWear />} />
        <Route path="/tshirts" element={<TShirts />} />
        <Route path="/shirts" element={<Shirts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-placed" element={<OrderPlaced />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
