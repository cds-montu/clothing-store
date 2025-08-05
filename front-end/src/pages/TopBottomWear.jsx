import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import ProductList from "../components/ProductList";

export default function TopBottomWear() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const list = items.filter((p) =>
    ["shirts", "jeans", "shorts", "skirts", "top & bottom wear"].includes(
      p.category.toLowerCase()
    )
  );

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return <ProductList products={list} />;
}
