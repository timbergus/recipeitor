// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

const coverageFrom = ['views'];

module.exports = {
  // Automatically clear mock calls and instances between every test.

  clearMocks: true,

  // Coverage.

  collectCoverage: true,
  collectCoverageFrom: coverageFrom.map(module => `src/${module}/**/*.{ts,tsx,js,jsx}`),
  coverageReporters: ['lcov', 'text-summary'],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },

  // A map from regular expressions to module names or to arrays
  // of module names that allow to stub out resources with a single module.

  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/jest/mocks/file.mock.js',
    '\\.(css|sass)$': '<rootDir>/config/jest/mocks/style.mock.js',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules'],
};
