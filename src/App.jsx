import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './components/Cart';
import Checkout from './pages/Checkout';
import OrderPlaced from './pages/OrderPlaced';
import NewArrivals from './pages/NewArrivals';
import Men from './pages/Men';
import Women from './pages/Women';
import TopBottomWear from './pages/TopBottomWear';
import TShirts from './pages/TShirts';
import Shirts from './pages/Shirts';
import AllProducts from "./pages/AllProducts";
import ProductDetail from './pages/ProductDetail';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home cart={cart} updateCart={setCart} />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/top-bottom" element={<TopBottomWear />} />
        <Route path="/tshirts" element={<TShirts />} />
        <Route path="/shirts" element={<Shirts />} />
        <Route path="/cart" element={<Cart cart={cart} updateCart={setCart} />} />
        <Route path="/checkout" element={<Checkout updateCart={setCart} />} />
        <Route path="/order-placed" element={<OrderPlaced />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
