module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-mixed-spaces-and-tabs': 0,
    'no-undef': 0,
    'no-unused-vars': 0,
    'no-useless-escape': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-redeclare': 0,
    'no-cond-assign': 0,
    'no-unreachable': 0,
    'no-empty': 0,
    'no-useless-escape': 0,
  },
};
