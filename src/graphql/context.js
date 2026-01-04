import jwt from "jsonwebtoken";
import { ENV } from "../config/env.js";
import User from "../models/User.js";

export const graphqlContext = async ({ req }) => {
  const authHeader = req.headers.authorization || "";
  let user = null;

  if (authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, ENV.JWT_SECRET);
      user = await User.findById(decoded.id).select("-password");
    } catch (err) {
      user = null; // token invalid or expired
    }
  }

  return { user };
};
