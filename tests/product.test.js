import { gqlRequest } from "./helpers/graphqlRequest.js";

it("fetches products with pagination", async () => {
  const res = await gqlRequest(`
query {
products(page: 1, limit: 5) {
total
products {
name
price
}
}
}
`);

  expect(res.body.data.products.products.length).toBeLessThanOrEqual(5);
});
