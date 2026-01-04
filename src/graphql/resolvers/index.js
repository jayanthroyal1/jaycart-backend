import { authResolvers } from "./auth.resolver.js";
import { productResolvers } from "./product.resolver.js";
import { orderResolvers } from "./order.resolver.js";

export const resolvers = {
  Query: {
    ...productResolvers.Query,
    ...orderResolvers.Query,
  },
  Mutation: {
    ...authResolvers.Mutation,
  },
};
