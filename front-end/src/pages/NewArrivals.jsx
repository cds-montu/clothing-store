import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import ProductList from "../components/ProductList";
import { Typography, Container } from "@mui/material";

const NewArrivals = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.products);

useEffect(() => {
  if (!items.length) {
    dispatch(fetchProducts());
  }
}, [dispatch, items.length]);


  const filteredProducts = items.filter(
    (product) => product.category?.toLowerCase() === "new arrivals".toLowerCase()
  );

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">
        New Arrivals 👕🧥
      </Typography>
      <ProductList products={filteredProducts} />
    </Container>
  );
};

export default NewArrivals;
