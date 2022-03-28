module.exports = {
  extends: [
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "standard-jsx",
    "prettier",
  ],
  rules: {
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-handler-names": "off",
    "react/prop-types": 0,
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
    "react/jsx-key": [
      "warn",
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: false,
      },
    ],
    "react-hooks/exhaustive-deps": "warn",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        pathGroups: [
          {
            pattern: "#/**",
            group: "parent",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],
    "import/newline-after-import": "error",
    curly: ["error", "all"],
  },

  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },

  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
        extraFileExtensions: ".html",
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
      ],

      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/no-empty-interface": "off",
      },
      settings: {
        /**
         * import plugin with Typescript configuration
         * https://github.com/alexgorbatchev/eslint-import-resolver-typescript#configuration
         */
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
          typescript: {
            alwaysTryTypes: true,
            project: "./tsconfig.json",
          },
        },
      },
    },
  ],
};
