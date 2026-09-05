import base from "@andriyor/oxlint-config";
import react from "@andriyor/oxlint-config/react";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [base, react],
  plugins: [],
  env: { builtin: true, browser: true, es2020: true },
  ignorePatterns: ["dist"],
});
