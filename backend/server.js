import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import productRoutes from "./routes/productRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use("/api/products", productRoutes);

// Optional extra route—NOT required if frontend uses /api/products
app.get("/products", async (req, res) => {
  return res.redirect("/api/products");
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
