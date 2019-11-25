// jest.config.js
const baseConfig = require('./jest.config');
module.exports = Object.assign({}, baseConfig, {
  collectCoverage: true,
  reporters: ['default', 'jest-junit'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/node_modules/**'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
});
