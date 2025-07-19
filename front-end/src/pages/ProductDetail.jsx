import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import {
  Box,
  Button,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent
} from "@mui/material";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.products);

  useEffect(() => {
    if (!items.length) {
      dispatch(fetchProducts());
    }
  }, [dispatch, items.length]);

  const product = items.find((item) => item.id === parseInt(id));

  if (!product) return <Typography align="center">Loading...</Typography>;

  return (
    <Box sx={{ maxWidth: "1000px", margin: "40px auto", padding: 2 }}>
      <Button
        variant="contained"
        onClick={() => navigate(-1)}
        sx={{ mb: 3 }}
        style={{
          backgroundColor:"#28a745"
        }}
      >
        ← Back
      </Button>

      <Card sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4, padding: 5,boxShadow:5 }}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{ width: { xs: "100%", md: "50%" }, maxHeight: 400, objectFit: "contain", borderRadius: 2 }}
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography variant="h5" fontWeight="bold">
            {product.name}
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            {product.category}
          </Typography>
          <Typography variant="h6" color="primary">
            ₹{product.price}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at
            sem eu velit suscipit tincidunt.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductDetail;
