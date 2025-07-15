import express from "express";
import db from "../db/db.js";
import multer from "multer";
import csv from "csv-parser";
import fs from "fs";

const upload = multer({ dest: "uploads/" });

const router = express.Router();

// 🔹 GET all products
router.get("/", async (req, res) => {
  try {
    const products = await db("products").select("*");
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// 🔹 POST single product (useful for manual entry or Postman testing)
router.post("/add", async (req, res) => {
  const { name, category, price, image } = req.body;
  try {
    await db("products").insert({ name, category, price, image });
    res.status(201).json({ message: "Product added" });
  } catch (err) {
    console.error("Insert Error:", err); // 👈 Add this
    res.status(500).json({ error: "Failed to add" });
  }
});

router.post("/bulk-upload", upload.single("file"), async (req, res) => {
  const results = [];
  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", async () => {
      try {
        for (const row of results) {
          await db("products").insert(row);
        }
        res.status(200).json({ message: "Bulk upload successful" });
      } catch (err) {
        res.status(500).json({ error: "Bulk upload failed" });
      }
    });
});

export default router;
