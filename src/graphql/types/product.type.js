import { gql } from "apollo-server-express";

const productType = gql`
  type Product {
    id: ID!
    name: String
    price: Float
    category: String
  }
`;

export default productType;
