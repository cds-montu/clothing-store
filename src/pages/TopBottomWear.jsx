import { PRODUCTS } from '../data/products';
import ProductCard from "../components/ProductCard";

const TopBottomWear = ({ cart, updateCart }) => {
  const categories = ["Shirts", "Jeans", "Shorts", "Skirts"];
  const filtered = PRODUCTS.filter((p) => categories.includes(p.category));
  return (
    <div className="products-grid">
      {filtered.map((product) => (
        <ProductCard key={product.id} product={product} cart={cart} updateCart={updateCart} />
      ))}
    </div>
  );
};

export default TopBottomWear;
