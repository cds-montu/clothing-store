import { PRODUCTS } from '../data/products';
import ProductCard from "../components/ProductCard";

const TShirts = ({ cart, updateCart }) => {
  const filtered = PRODUCTS.filter((p) => p.category === "T-Shirts");
  return (
    <div className="products-grid">
      {filtered.map((product) => (
        <ProductCard key={product.id} product={product} cart={cart} updateCart={updateCart} />
      ))}
    </div>
  );
};

export default TShirts;
