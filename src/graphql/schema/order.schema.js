import { gql } from "apollo-server-express";

export const orderSchema = gql`
  type OrderItem {
    productId: ID!
    name: String!
    price: Float!
    quantity: Int!
  }

  type Order {
    id: ID!
    items: [OrderItem!]!
    totalAmount: Float!
    status: String!
    createdAt: String!
  }

  extend type Query {
    myOrders: [Order!]!
  }
`;
