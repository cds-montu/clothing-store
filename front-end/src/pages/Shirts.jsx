import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import ProductList from "../components/ProductList";

export default function Shirts() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);

useEffect(() => {
  if (items.length === 0) {
    dispatch(fetchProducts());
  }
}, [dispatch, items.length]);

  const list = items.filter(
    (p) => p.category.toLowerCase() === "shirts"
  );

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return <ProductList products={list} />;
}
