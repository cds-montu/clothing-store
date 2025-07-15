import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function AllProducts({ cart, updateCart }) {
  return (
    <div style={grid}>
      {PRODUCTS.map(p => (
        <ProductCard key={p.id} product={p} cart={cart} updateCart={updateCart} />
      ))}
    </div>
  );
}
const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
  gap: "20px",
  padding: "2rem",
};
