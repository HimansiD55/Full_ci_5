export default [
  {
    files: ["**/*.js"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs", // ✅ for require()
      globals: {
        require: "readonly",
        module: "readonly",
        console: "readonly"
      }
    },

    rules: {
      "no-unused-vars": "error",
      "semi": ["error", "always"],
      "no-var": "error"
    }
  },

  // ✅ Jest config for test files
  {
    files: ["tests/**/*.js"],

    languageOptions: {
      globals: {
        describe: "readonly",
        test: "readonly",
        expect: "readonly"
      }
    }
  }
];
