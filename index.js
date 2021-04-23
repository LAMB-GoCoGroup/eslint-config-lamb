module.exports = {
  extends: 'eslint:recommended',
  rules: {
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: false
      }
    ],
    quotes: ['error', 'single']
  }
}