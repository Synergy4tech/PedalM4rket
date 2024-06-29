module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js", "json", "node"],
  roots: ["<rootDir>/tests"],
  globals: {
    "ts-jest": {
      diagnostics: false,
    },
  },
  setupFiles: ["./tests/setup.ts"],
};
