import { useSelector } from "react-redux";
import ProductList from "../components/ProductList";

export default function Shirts() {
  const list = useSelector((state) =>
    state.products.items.filter((p) => p.category === "Shirts")
  );
  return <ProductList products={list} />;
}
