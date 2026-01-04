import Order from "../../models/Order.js";
import { requireAuth } from "../utils/requireAuth.js";

export const orderResolvers = {
  Query: {
    myOrders: async (_, __, { user }) => {
      requireAuth(user);
      return Order.find({ user: user._id });
    },
  },
};
