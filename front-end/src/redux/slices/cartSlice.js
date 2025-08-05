import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, { payload }) => {
      state.push({ ...payload, quantity: 1 });
    },
    incrementQuantity: (state, { payload }) => {
      const item = state.find(p => p.id === payload);
      if (item) item.quantity += 1;
    },
    decrementQuantity: (state, { payload }) => {
      const item = state.find(p => p.id === payload);
      if (item) item.quantity = Math.max(item.quantity - 1, 1);
    },
    removeFromCart: (state, { payload }) => state.filter(p => p.id !== payload),
    clearCart: () => []
  }
});

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
