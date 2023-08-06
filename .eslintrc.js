module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    "react-native/react-native": true
  },
  extends: ['@react-native-community',
  'eslint:recommended',
    'prettier',
    "plugin:react-hooks/recommended"],
  rules: {
    // ...
    'prettier/prettier': ['error', { singleQuote: false }],
  },
};
