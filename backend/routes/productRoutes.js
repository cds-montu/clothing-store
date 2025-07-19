import express from "express";
import db from "../db/db.js";
import multer from "multer";
import csv from "csv-parser";
import fs from "fs";
import path from "path";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await db("products").select("*");
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// POST single product
router.post("/add", async (req, res) => {
  const { name, category, price, image } = req.body;
  try {
    await db("products").insert({ name, category, price, image });
    res.status(201).json({ message: "Product added" });
  } catch (err) {
    console.error("Insert Error:", err);
    res.status(500).json({ error: "Failed to add" });
  }
});

// ✅ BULK UPLOAD - fixed version
router.post("/bulk-upload", async (req, res) => {
  try {
    if (!req.files || !req.files.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const file = req.files.file;
    const filePath = `./uploads/${file.name}`;
    await file.mv(filePath);

    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", async () => {
        try {
          await db("products").insert(results);
          res.json({ message: "Bulk upload successful" });
        } catch (err) {
          console.error("DB Insert Error:", err);
          res.status(500).json({ error: "Failed to insert products" });
        }
      });
  } catch (err) {
    console.error("Upload Error:", err);
    res.status(500).json({ error: "Bulk upload failed" });
  }
});


export default router;
