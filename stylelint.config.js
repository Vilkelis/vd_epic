module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-a11y/recommended',
    'stylelint-config-styled-components',
    'stylelint-order-config-standard',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'color-hex-case': 'upper',
    // 'order/properties-alphabetical-order': true,
  },
}
