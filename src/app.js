import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./graphql/index.js";
import { schemas } from "./graphql/schema/index.js";
import { resolvers } from "./graphql/resolvers.js";
import paymentRoutes from "./routes/payment.js";
import { errorHandler } from "./middleware/error.js";
import { authContext } from "./middleware/auth.js";
import adminRoutes from "./routes/admin.js";
import orderRoutes from "./routes/order.js";
import { graphqlContext } from "./graphql/context.js";

const app = express();
app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
app.use("/api/payment", paymentRoutes);
app.use(errorHandler);

app.use(express.urlencoded({ extended: true }));
app.use("/admin", adminRoutes);
//Payments
app.use("/api/order", orderRoutes);

const schema = makeExecutableSchema({
  typeDefs: schemas,
  resolvers,
});

const apollo = new ApolloServer({
  schema,
  typeDefs,
  resolvers,
  // context: authContext,
  context: graphqlContext,
});
await apollo.start();
apollo.applyMiddleware({ app, path: "/graphql" });

export default app;
