import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Product from "../models/Product.js";
import { ENV } from "../config/env.js";
import { registerSchema, loginSchema } from "../validations/auth.schema.js";
import { productQuerySchema } from "../validations/product.schema.js";
import { validate } from "../middleware/validate.js";
import { requireAuth } from "../middleware/auth.js";

export const resolvers = {
  Query: {
    products: async (_, args) => {
      const {
        page = 1,
        limit = 6,
        search = "",
        category,
        minPrice,
        maxPrice,
      } = validate(productQuerySchema, args);

      const filter = {};

      // 🔍 Search by name
      if (search) {
        filter.name = { $regex: search, $options: "i" };
      }

      // 🧩 Filter by category
      if (category) {
        filter.category = category;
      }

      // 💰 Price range filter
      if (minPrice || maxPrice) {
        filter.price = {};
        if (minPrice) filter.price.$gte = minPrice;
        if (maxPrice) filter.price.$lte = maxPrice;
      }

      return Product.find(filter)
        .skip((page - 1) * limit)
        .limit(limit);
    },
  },
};

// ================================
// 4. Example GraphQL Queries
// ================================

/*
🔹 Search + Category
query {
products(search: "iphone", category: "Mobile") {
name
price
category
}
}
*/

/*
🔹 Price Range
query {
products(minPrice: 50000, maxPrice: 100000) {
name
price
}
}
*/

/*
🔹 All Combined
query {
products(
search: "pro"
category: "Laptop"
minPrice: 80000
maxPrice: 120000
page: 1
limit: 5
) {
name
price
category
}
}
*/
