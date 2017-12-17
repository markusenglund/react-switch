module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageDirectory: "./coverage",
  coveragePathIgnorePatterns: ["./node_modules", "./jest.setup.js"],
  setupFiles: ["./jest.setup.js"]
};
