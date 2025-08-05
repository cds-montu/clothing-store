import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import { addToCart, incrementQuantity, decrementQuantity } from "../redux/slices/cartSlice";
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
  const { items, loading } = useSelector((state) => state.products);
    const cart = useSelector((state) => state.cart);
  const item = cart.find((i) => i.id === product.id);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, items.length]);

  const product = items.find((item) => String(item.id) === id);

  if (loading || !product) {
    return <Typography align="center" sx={{ mt: 5 }}>Loading or Product Not Found</Typography>;
  }

  return (
    <Box sx={{ maxWidth: "1000px", margin: "40px auto", padding: 2 }}>
      <Button
        variant="contained"
        onClick={() => navigate(-1)}
        sx={{ mb: 3 }}
        style={{ backgroundColor: "#28a745" }}
      >
        ← Back
      </Button>

      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          padding: 5,
          boxShadow: 5,
        }}
      >
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{
            width: { xs: "100%", md: "50%" },
            maxHeight: 400,
            objectFit: "contain",
            borderRadius: 2,
          }}
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
            This is a premium quality {product.category}. Stylish and comfortable.
          </Typography>
          {item ? (
            <div >
              <button onClick={() => dispatch(decrementQuantity(product.id))}>−</button>
              <span >{item.quantity}</span>
              <button onClick={() => dispatch(incrementQuantity(product.id))}>+</button>
            </div>
          ) : (
            <button
              onClick={() => dispatch(addToCart(product))}
              // style={styles.addButton}
            >
              🛒 Add to Cart
            </button>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};


export default ProductDetail;
