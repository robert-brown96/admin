module.exports = {
  singleQuote: false,
  semi: true,
  trailingComma: "none",
  bracketSpacing: true,
  arrowParens: "always",
  plugins: ["prettier-plugin-organize-imports"],
  organizeImportsSkipDestructiveCodeActions: true,
  overrides: [
    {
      files: "*.json",
      options: {
        singleQuote: false
      }
    },
    {
      files: ".*rc",
      options: {
        singleQuote: false,
        parser: "json"
      }
    }
  ]
};