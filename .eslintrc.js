module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: [
    // 'eslint:all',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/react',
    'prettier/standard',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  root: true,
  rules: {
    'eol-last': ['error', 'always'],
    // 'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    // Cf. https://eslint.org/docs/rules/func-style
    'func-style': 'off',
    indent: 'off',
    'newline-before-return': 'error',
    'no-console': 'warn',
    'no-continue': 'off',
    'no-dupe-class-members': 'error',
    'no-var': 'error',
    // https://eslint.org/docs/rules/multiline-comment-style
    'multiline-comment-style': 'off',
    'object-shorthand': ['error', 'always'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-spread': 'error',
    'sort-keys': 'off',
    'sort-imports': 'off',
    'react/prop-types': 'off',
    'require-yield': 'error',
  },
};
