import express from "express";
import db from "../db/db.js";
import fs from "fs";
import csv from "csv-parser";

const router = express.Router();

// GET /api/products
router.get("/", async (req, res) => {
  try {
    const products = await db("products").select("*");
    res.json(products);
  } catch {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// POST /api/products/add
router.post("/add", async (req, res) => {
  const { name, category, price, image } = req.body;
  try {
    await db("products").insert({ name, category, price, image });
    res.status(201).json({ message: "Product added" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add product" });
  }
});

// POST /api/products/bulk-upload
router.post("/bulk-upload", async (req, res) => {
  if (!req.files || !req.files.file)
    return res.status(400).json({ error: "No file uploaded" });

  const file = req.files.file;
  const path = "./uploads/" + file.name;
  await file.mv(path);

  const rows = [];
  fs.createReadStream(path)
    .pipe(csv())
    .on("data", data => rows.push(data))
    .on("end", async () => {
      try {
        await db("products").insert(rows);
        res.json({ message: "Bulk upload successful" });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to insert products" });
      }
    });
});

export default router;
