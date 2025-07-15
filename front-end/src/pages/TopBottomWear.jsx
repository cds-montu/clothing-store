import { useSelector } from "react-redux";
import ProductList from "../components/ProductList";

export default function TopBottomWear() {
  const items = useSelector((state) => state.products.items);
  const list = items.filter((p) =>
    ["Shirts", "Jeans", "Shorts", "Skirts"].includes(p.category)
  );
  return <ProductList products={list} />;
}
