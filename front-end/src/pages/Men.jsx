import { useSelector } from "react-redux";
import ProductList from "../components/ProductList";

export default function Men() {
  const items = useSelector((state) => state.products.items);
  const list = items.filter((p) =>
    ["T‑Shirts", "Shirts", "Jeans", "Jackets"].includes(p.category)
  );
  return <ProductList products={list} />;
}
