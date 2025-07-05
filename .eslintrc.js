module.exports = {
  env: {
    es6: true,
    node: 1,
    jest: true,
  },
  extends: 'eslint:recommended',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  rules: {
    indent: 'off',
    'linebreak-style': ['error', 'unix'],
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'no-console': 'warn',
    'no-unused-vars': 'off',
    //'@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': 'warn', // Consider using explicit annotations for object literals and function return types even when they can be inferred.
    'no-empty': 'warn',
  },
};
