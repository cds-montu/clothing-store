import { PRODUCTS } from '../data/products';
import ProductCard from "../components/ProductCard";

const Women = ({ cart, updateCart }) => {
  const womenCategories = ["Kurti", "Dresses", "Skirts"];
  const womenProducts = PRODUCTS.filter((p) => womenCategories.includes(p.category));
  return (
    <div className="products-grid">
      {womenProducts.map((product) => (
        <ProductCard key={product.id} product={product} cart={cart} updateCart={updateCart} />
      ))}
    </div>
  );
};

export default Women;
