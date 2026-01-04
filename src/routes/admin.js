import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// View products
router.get("/products", async (req, res) => {
  const products = await Product.find();
  res.render("products", { products });
});

// Add product form
router.get("/products/new", (req, res) => {
  res.render("add-product");
});

// Create product
router.post("/products", async (req, res) => {
  const { name, price, category } = req.body;
  await Product.create({ name, price, category });
  res.redirect("/admin/products");
});

// Delete product
router.post("/products/:id/delete", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.redirect("/admin/products");
});

export default router;
