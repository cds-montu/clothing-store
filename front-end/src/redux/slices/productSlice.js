import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async () => {
    const res = await axios.get("http://localhost:5000/api/products");
    return res.data;
  }
);

const slice = createSlice({
  name: "products",
  initialState: { items: [], loading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => { state.loading = true; })
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, { error }) => {
        state.error = error.message;
        state.loading = false;
      });
  }
});

export default slice.reducer;
