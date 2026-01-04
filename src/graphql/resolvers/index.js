import { productResolvers } from "./product.resolver.js";
import { authResolvers } from "./auth.resolver.js";

export const resolvers = {
  Query: {
    ...productResolvers.Query,
    ...orderResolvers.Query,
  },
  Mutation: {
    ...authResolvers.Mutation,
  },
};
