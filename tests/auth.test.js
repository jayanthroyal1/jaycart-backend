import { gqlRequest } from "./helpers/graphqlRequest.js";

let token;

describe("Auth GraphQL", () => {
  it("registers user", async () => {
    const res = await gqlRequest(`
      mutation {
        register(
          name: "Test"
          email: "test@test.com"
          password: "123456"
        ) {
          id
          email
        }
      }
    `);

    expect(res.body.data.register.id).toBeDefined();
  });

  it("logs in user", async () => {
    const res = await gqlRequest(`
      mutation {
        login(
          email: "test@test.com"
          password: "123456"
        ) {
          token
        }
      }
    `);

    token = res.body.data.login.token;
    expect(token).toBeDefined();
  });
});
