import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import ProductCard from "../components/ProductCard";
import { Grid, Typography } from "@mui/material";

const Women = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const womenProducts = items.filter(
    (product) => product.category.toLowerCase() === "women"
  );

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Women
      </Typography>

      <Grid container spacing={3}>
        {womenProducts.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      {womenProducts.length === 0 && (
        <Typography variant="body1" color="text.secondary" mt={4}>
          No products found in this category.
        </Typography>
      )}
    </div>
  );
};

export default Women;
