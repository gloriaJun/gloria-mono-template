/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@template/eslint-config/next.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
};
