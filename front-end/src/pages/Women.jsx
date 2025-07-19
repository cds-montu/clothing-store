import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard"; // Assuming you have a card component
import { Grid, Typography } from "@mui/material";

const Women = () => {
  const products = useSelector((state) => state.products.items);

  const womenProducts = products.filter(
    (product) => product.category === "Women"
  );

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
