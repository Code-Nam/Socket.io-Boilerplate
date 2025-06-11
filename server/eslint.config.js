import { defineConfig } from "eslint/config";

import tsParser from "@typescript-eslint/parser";
import { node } from "globals";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import { configs } from "@eslint/js";

import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: configs.recommended,
    allConfig: configs.all
});

export default defineConfig([{
    languageOptions: {
        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
            project: "./tsconfig.json",
        },

        globals: {
            ...node,
        },
    },

    extends: compat.extends(
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ),

    plugins: {
        "@typescript-eslint": typescriptEslint,
    },

    rules: {
        "no-console": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        "prettier/prettier": "error",
    },
}]);
