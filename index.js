module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    parser: 'babel-eslint',
  },
  extends: ['eslint:recommended', 'airbnb-base', 'plugin:prettier/recommended'],
  rules: {
    "no-delete-var": 2, // 禁止使用delete操作符，使用Reflect.deleteProperty 
    "no-labels": 2, // 禁止使用label语句
    "no-console": 0, // 可以使用console
    "no-debugger": 1, // 警告debugger语句
    "no-new": 0, // 可以使用new XXX()，
    "camelcase": 0, // 不强制使用驼峰，对接接口须与接口保持字段保持一致 
    "no-bitwise": 0, // 可以使用位运算
    "continue": 0, // 可以使用continue语句
    "no-inline-comments": 0, // 允许var foo = 4; // other thing类似注释
    "no-mixed-operators": 0, // 允许混合操作符
    "no-param-reassign": 0, // 允许参数赋值
    "no-plusplus": 0, // 允许自增自减
    "no-tabs": 0, // 允许使用tab
  }
}