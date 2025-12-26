import eslintPluginAstro from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y";
import tsParser from "@typescript-eslint/parser";

export default [
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs["jsx-a11y-recommended"],
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
    },
  },
  {
    plugins: {
      "jsx-a11y": jsxA11y,
    },
    rules: {
      // Add custom rules here
    },
  },
  {
    ignores: ["dist/", "node_modules/", ".astro/", ".vercel/"],
  },
];
