import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import ProductList from "../components/ProductList";

const NewArrivals = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // const newArrivalProducts = items.filter(
  //   (p) => p.category.toLowerCase() === "new arrivals"
  // );

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <div>
      {/* <h2 style={{ textAlign: "center", marginTop: 30 }}></h2> */}
      <ProductList products={items} />
    </div>
  );
};

export default NewArrivals;
