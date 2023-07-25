module.exports = {
  bracketSameLine: true,
  bracketSpacing: false,
  trailingComma: 'all',
  semi: false, // adding semicolons at the end
  tabWidth: 2,
  rules: {
    "prettier/prettier": ["error", { "singleQuote": true }],
    "quotes": ["error", "single", { "avoidEscape": true }]
  },
  bracketSameLine: false, // add the closing bracket of elements on the next line
  arrowParens: "always" // arrow function paranthesis for better styling
};
