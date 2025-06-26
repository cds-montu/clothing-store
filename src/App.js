import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";
import OrderPlaced from "./pages/OrderPlaced";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<Home cart={cart} updateCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} updateCart={setCart} />} />
        <Route path="/checkout" element={<Checkout updateCart={setCart} />} />
        <Route path="/product/:id" element={<ProductDetail cart={cart} updateCart={setCart} />} />
        <Route path="/order-placed" element={<OrderPlaced />} />
      </Routes>
    </Router>
  );
}

export default App;
