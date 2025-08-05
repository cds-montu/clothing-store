import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import ProductCard from "../components/ProductCard";
import { Grid, Typography, Box, CircularProgress } from "@mui/material";

const All = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 6,
        px: 3,
        background: "linear-gradient(to right, #ffecd2, #fcb69f)",
      }}
    >

      {loading ? (
        <Box sx={{ textAlign: "center", mt: 8 }}>
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        <Grid container spacing={4} justifyContent="center">
          {items.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default All;
