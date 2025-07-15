import { useSelector } from "react-redux";
import ProductList from "../components/ProductList";

export default function Women() {
  const items = useSelector((state) => state.products.items);
  const list = items.filter((p) =>
    ["Kurti", "Dresses", "Skirts"].includes(p.category)
  );
  return <ProductList products={list} />;
}
