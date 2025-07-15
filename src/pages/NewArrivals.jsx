import { PRODUCTS } from '../data/products';
import ProductCard from "../components/ProductCard";

const NewArrivals = ({ cart, updateCart }) => {
  const newItems = PRODUCTS.slice(0, 20); // First 20 products as new arrivals
  return (
    <div className="products-grid">
      {newItems.map((product) => (
        <ProductCard key={product.id} product={product} cart={cart} updateCart={updateCart} />
      ))}
    </div>
  );
};

export default NewArrivals;
