import { gql } from "apollo-server-express";

const userType = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    role: String!
    createdAt: String
  }
`;

export default userType;
