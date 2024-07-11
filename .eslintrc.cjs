module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@react-three/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'react-three'],
  rules: {
    "indent": ["error", 2],
    "no-debugger": 1,
    "quotes": ["error", "single"],
    "max-len": [
      "error",
      {
        "code": 120,
        "comments": 120,
        "tabWidth": 2,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreRegExpLiterals": true
      }
    ],
    "padding-line-between-statements": [
      "error",
      {
        "blankLine": "always",
        "prev": ["block", "multiline-block-like", "export", "function"],
        "next": "*"
      },
      {
        "blankLine": "always",
        "prev": "*",
        "next": [
          "block",
          "export",
          "for",
          "function",
          "if",
          "multiline-block-like",
          "return",
          "switch"
        ]
      },
      {
        "blankLine": "always",
        "prev": ["const", "let"],
        "next": "*"
      },
      {
        "blankLine": "any",
        "prev": ["const", "let"],
        "next": ["const", "let"]
      }
    ],
    "max-lines": ["error", 1000],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1
      }
    ],
    "semi": ["error", "always"],
    "array-callback-return": [
      "error",
      {
        "allowImplicit": true
      }
    ],
    "arrow-body-style": [
      "error",
      "as-needed",
      {
        "requireReturnForObjectLiteral": false
      }
    ],
    "implicit-arrow-linebreak": ["error", "beside"],
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    "space-infix-ops": ["error", { "int32Hint": false }],
    "dot-notation": [
      "error",
      {
        "allowKeywords": true
      }
    ],
    "dot-location": ["error", "property"],
    "eqeqeq": [
      "error",
      "always",
      {
        "null": "ignore"
      }
    ],
    "no-else-return": [
      "error",
      {
        "allowElseIf": false
      }
    ],
    "no-irregular-whitespace": "error",
    "no-lone-blocks": "error",
    "no-multi-spaces": [
      "error",
      {
        "ignoreEOLComments": false
      }
    ],
    "no-param-reassign": [
      "error",
      {
        "props": false
      }
    ],
    // "no-return-assign": ["error", "always"],
    "eol-last": ["error", "always"],
    "space-before-function-paren": ["error", "always"],
    "operator-linebreak": ["error", "before"],
    "no-sparse-arrays": "error",
    "no-trailing-spaces": "error",
    "no-var": "error",
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-useless-return": "error",
    "object-curly-spacing": ["error", "never"],
    "array-bracket-spacing": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "prefer-const": [
      "error",
      {
        "destructuring": "any",
        "ignoreReadBeforeAssign": true
      }
    ],
    "prefer-template": "error",
    "radix": "error",
    "valid-typeof": [
      "error",
      {
        "requireStringLiterals": true
      }
    ],
    "vars-on-top": "error",
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "functions": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline"
      }
    ],
    "semi-style": ["error", "last"],
    "no-extra-semi": "error",
    "no-extra-bind": "error",
    "quote-props": ["error", "as-needed"],
  }
}
