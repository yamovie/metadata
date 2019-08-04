module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: [
    'airbnb', 'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    sourceType: 'script',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-console': 0
  },
};
