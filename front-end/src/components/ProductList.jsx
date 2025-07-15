import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <div className="products-grid" style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(220px,1fr))",
      gap: "20px",
      padding: "20px",
    }}>
      {products.map((p) => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}
