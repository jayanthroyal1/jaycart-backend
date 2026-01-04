import request from "supertest";
import app from "../../src/app.js";

export const gqlRequest = (query, variables = {}, token) => {
  const req = request(app).post("/graphql").send({ query, variables });

  if (token) {
    req.set("Authorization", `Bearer ${token}`);
  }

  return req;
};
