import { gql } from "apollo-server-express";

export const productSchema = gql`
  # =========================
  # TYPES
  # =========================
  type Product {
    id: ID!
    name: String!
    description: String
    category: String
    price: Float!
    image: String
    stock: Int
  }

  type ProductPage {
    products: [Product!]!
    total: Int!
    page: Int!
    limit: Int!
  }

  # =========================
  # INPUTS
  # =========================
  input ProductFilterInput {
    search: String
    category: String
    minPrice: Float
    maxPrice: Float
  }

  # =========================
  # ENUMS
  # =========================
  enum SortOrder {
    PRICE_ASC
    PRICE_DESC
    NEWEST
  }

  # =========================
  # QUERIES
  # =========================
  extend type Query {
    products(
      filter: ProductFilterInput
      page: Int = 1
      limit: Int = 10
      sort: SortOrder = NEWEST
    ): ProductPage!
  }
`;
