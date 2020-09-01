module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
     // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'eol-last': 0,
    'space-before-function-paren': 0,
    'no-trailing-spaces': 0,
    'indent': 'off',
    "quote-props": [2, "as-needed", { "keywords": false, "unnecessary": false }],
		"prefer-const": 0,
		"no-mixed-spaces-and-tabs": 0,
		"no-tabs": 'off'
  }
}
