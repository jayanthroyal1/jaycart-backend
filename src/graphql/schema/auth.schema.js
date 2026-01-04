import { gql } from "apollo-server-express";

export const authSchema = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type AuthPayload {
    token: String!
  }

  extend type Mutation {
    register(name: String!, email: String!, password: String!): User!

    login(email: String!, password: String!): AuthPayload!
  }
`;
