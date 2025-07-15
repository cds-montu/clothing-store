import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.products);

  useEffect(() => {
    if (!items.length) {
      dispatch(fetchProducts());
    }
  }, [dispatch, items.length]);

  const product = items.find((item) => item.id === parseInt(id));

  if (!product) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px" }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", maxHeight: "400px", objectFit: "cover", borderRadius: "8px" }}
      />
      <h2 style={{ marginTop: "20px" }}>{product.name}</h2>
      <p style={{ color: "#777" }}>{product.category}</p>
      <h3>₹{product.price}</h3>
      <p style={{ marginTop: "10px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at sem eu velit suscipit
        tincidunt. 
      </p>
    </div>
  );
};

export default ProductDetail;
