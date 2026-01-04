import mongoose from "mongoose";
import { connectDB } from "../src/config/db.js";

beforeAll(async () => {
  await connectDB(true); // test DB
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});
