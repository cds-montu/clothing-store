// import { useSelector } from "react-redux";
import ProductList from "../components/ProductList";
import { PRODUCTS } from "../data/products"

export default function Men() {
  // const items = useSelector((state) => state.products.items);
  const menProducts = PRODUCTS.filter(p => p.category === "Men");

  return <ProductList products={menProducts} />;
}
