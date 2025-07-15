import { PRODUCTS } from '../data/products';
import ProductCard from "../components/ProductCard";

const Men = ({ cart, updateCart }) => {
  const menCategories = ["T-Shirts", "Shirts", "Jeans", "Hoodies", "Jackets"];
  const menProducts = PRODUCTS.filter((p) => menCategories.includes(p.category));
  return (
    <div className="products-grid">
      {menProducts.map((product) => (
        <ProductCard key={product.id} product={product} cart={cart} updateCart={updateCart} />
      ))}
    </div>
  );
};

export default Men;
