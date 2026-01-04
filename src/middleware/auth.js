import jwt from "jsonwebtoken";
import { ENV } from "../config/env.js";
import User from "../models/User.js";

/**
 * Runs on every GraphQL request
 * Extracts user from JWT
 */
export const authContext = async ({ req }) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return { user: null };

  try {
    const decoded = jwt.verify(token, ENV.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    return { user };
  } catch (err) {
    return { user: null };
  }
};

/**
 * Helper for protecting resolvers
 * Call inside resolvers
 */
export const requireAuth = (user) => {
  if (!user) {
    const error = new Error("Authentication required");
    error.statusCode = 401;
    throw error;
  }
};

// We centralize authentication helpers inside the auth middleware so all resolvers can consistently enforce authorization without duplicating logic. The GraphQL context injects the authenticated user, and requireAuth guards protected resolvers.
