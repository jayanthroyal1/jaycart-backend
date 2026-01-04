import { gqlRequest } from "./helpers/graphqlRequest.js";

let token;

beforeAll(async () => {
  const res = await gqlRequest(`
mutation {
login(email: "test@test.com", password: "123456") {
token
}
}
`);
  token = res.body.data.login.token;
});

it("blocks unauthenticated access", async () => {
  const res = await gqlRequest(`
query {
myOrders { id }
}
`);

  expect(res.body.errors[0].message).toContain("Authentication");
});

it("allows authenticated access", async () => {
  const res = await gqlRequest(`query { myOrders { id status } }`, {}, token);

  expect(res.body.data.myOrders).toBeDefined();
});
