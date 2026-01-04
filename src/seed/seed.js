import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/Product.js";
import { products } from "./products.js";

dotenv.config();

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected for seeding");

    await Product.deleteMany();
    await Product.insertMany(products);

    console.log("Products seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Seeding failed", error);
    process.exit(1);
  }
};

seedProducts();
