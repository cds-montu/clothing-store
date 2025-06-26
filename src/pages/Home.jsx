import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";

export default function Home({ cart, updateCart }) {
    return (
        <div style={{
            display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", padding: "30px"
        }}>
            {PRODUCTS.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    cart={cart}
                    updateCart={updateCart}
                />
            ))}
        </div>
    );
}
