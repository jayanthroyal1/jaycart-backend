// jest.config.mjs
import { resolve } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  testEnvironment: "node",
  moduleFileExtensions: ["js", "mjs", "json"],

  // Absolute imports
  moduleNameMapper: {
    "^@/(.*)$": resolve(__dirname, "src/$1"),
  },

  transformIgnorePatterns: ["/node_modules/"],

  testTimeout: 20000,
};
