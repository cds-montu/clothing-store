import { useSelector } from "react-redux";
import ProductList from "../components/ProductList";

export default function NewArrivals() {
  const items = useSelector(state => state.products.items);
  const list = items.slice(0, 20);
  return <ProductList products={list} />;
}
