module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  root: true,
  env: {
    node: true,
    jest: true
  },
  ignorePatterns: [
    ".eslintrc.js",
    "src/db/_gen/**",
    "src/db/__gen__/**",
    ".fttemplates/**"
  ],
  rules: {
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: true
        }
      },
      {
        selector: "enum",
        format: ["PascalCase"],
        custom: {
          regex: "^E[A-Z]",
          match: true
        }
      },
      {
        selector: "class",
        format: ["PascalCase"],
        suffix: [
          "Service",
          "Resolver",
          "Controller",
          "Module",
          "Repository",
          "Model",
          "Input",
          "Args",
          "Filter",
          "Interceptor",
          "Loader",
          "Strategy",
          "Consumer",
          "Queue",
          "Dto"
        ],
        modifiers: ["exported"]
      },
      {
        selector: "class",
        format: ["PascalCase"],
        suffix: [
          "Service",
          "Controller",
          "Resolver",
          "Repository",
          "Model",
          "Input",
          "Args"
        ],
        modifiers: ["abstract", "exported"],
        prefix: ["Abs"]
      },
      {
        selector: "function",
        format: ["camelCase"]
      },
      {
        selector: "enumMember",
        format: ["UPPER_CASE"]
      },
      {
        selector: "typeLike",
        format: ["PascalCase"]
      },
      {
        selector: "typeParameter",
        format: ["PascalCase"],
        custom: {
          regex: "^[A-Z]{1,1}$",
          match: true
        }
      }
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_",
        argsIgnorePattern: "^_"
      }
    ]
  },
  overrides: [
    {
      files: ["src/db/schema/**/*.ts", "src/**/*.model.ts"],
      rules: {
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "interface",
            format: ["PascalCase"],
            custom: {
              regex: "^I[A-Z]",
              match: true
            }
          },
          {
            selector: "enum",
            format: ["PascalCase"],
            custom: {
              regex: "^[A-Z]",
              match: true
            }
          },
          {
            selector: "class",
            format: ["PascalCase"],
            modifiers: ["exported"]
          },
          {
            selector: "class",
            format: ["PascalCase"],
            suffix: [
              "Service",
              "Controller",
              "Resolver",
              "Repository",
              "Model",
              "Input",
              "Args"
            ],
            modifiers: ["abstract", "exported"],
            prefix: ["Abs"]
          },
          {
            selector: "function",
            format: ["camelCase"]
          },
          {
            selector: "enumMember",
            format: ["camelCase", "UPPER_CASE", "PascalCase"]
          },
          {
            selector: "typeLike",
            format: ["PascalCase"]
          },
          {
            selector: "typeParameter",
            format: ["PascalCase"],
            custom: {
              regex: "^[A-Z]{1,1}$",
              match: true
            }
          }
        ]
      }
    },
    {
      files: ["src/**/*.guard.ts"],
      rules: {
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "interface",
            format: ["PascalCase"],
            custom: {
              regex: "^I[A-Z]",
              match: true
            }
          },
          {
            selector: "enum",
            format: ["PascalCase"],
            custom: {
              regex: "^[A-Z]",
              match: true
            }
          },
          {
            selector: "class",
            format: ["PascalCase"],
            modifiers: ["exported"],
            suffix: ["Guard"]
          },
          {
            selector: "class",
            format: ["PascalCase"],
            suffix: [
              "Service",
              "Controller",
              "Resolver",
              "Repository",
              "Model",
              "Input",
              "Args"
            ],
            modifiers: ["abstract", "exported"],
            prefix: ["Abs"]
          },
          {
            selector: "function",
            format: ["camelCase"]
          },
          {
            selector: "enumMember",
            format: ["camelCase", "UPPER_CASE", "PascalCase"]
          },
          {
            selector: "typeLike",
            format: ["PascalCase"]
          },
          {
            selector: "typeParameter",
            format: ["PascalCase"],
            custom: {
              regex: "^[A-Z]{1,1}$",
              match: true
            }
          }
        ]
      }
    },
    {
      files: ["src/**/events/*.ts"],
      rules: {
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "interface",
            format: ["PascalCase"],
            custom: {
              regex: "^I[A-Z]",
              match: true
            }
          },
          {
            selector: "enum",
            format: ["PascalCase"],
            custom: {
              regex: "^[A-Z]",
              match: true
            }
          },
          {
            selector: "class",
            format: ["PascalCase"],
            modifiers: ["exported"],
            suffix: ["Event"]
          },
          {
            selector: "class",
            format: ["PascalCase"],
            suffix: [
              "Service",
              "Controller",
              "Resolver",
              "Repository",
              "Model",
              "Input",
              "Args"
            ],
            modifiers: ["abstract", "exported"],
            prefix: ["Abs"]
          },
          {
            selector: "function",
            format: ["camelCase"]
          },
          {
            selector: "enumMember",
            format: ["camelCase", "UPPER_CASE", "PascalCase"]
          },
          {
            selector: "typeLike",
            format: ["PascalCase"]
          },
          {
            selector: "typeParameter",
            format: ["PascalCase"],
            custom: {
              regex: "^[A-Z]{1,1}$",
              match: true
            }
          }
        ]
      }
    }
  ]
};
