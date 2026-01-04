import { gql } from "apollo-server-express";

import { authSchema } from "./schema/auth.schema.js";
import { productSchema } from "./schema/product.schema.js";
import { orderSchema } from "./schema/order.schema.js";

export const typeDefs = [
  gql`
    type Query
    type Mutation
  `,
  authSchema,
  productSchema,
  orderSchema,
];
