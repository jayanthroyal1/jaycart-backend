import { gql } from "apollo-server-express";

const productSchema = gql`
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

  input ProductFilterInput {
    search: String
    category: String
    minPrice: Float
    maxPrice: Float
  }

  enum SortOrder {
    PRICE_ASC
    PRICE_DESC
    NEWEST
  }

  extend type Query {
    products(
      filter: ProductFilterInput
      page: Int
      limit: Int
      sort: SortOrder
    ): ProductPage!
  }
`;

export default productSchema;
