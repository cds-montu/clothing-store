import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import ProductList from "../components/ProductList";

export default function Men() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const menProducts = items.filter(
    (p) => p.category.toLowerCase() === "men"
  );

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return <ProductList products={menProducts} />;
}
