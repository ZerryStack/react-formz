const { defaults } = require("jest-config");
const path = require("path");

const workspaceNodeModules = path.resolve(__dirname, "../../", "node_modules");
const rootNodeModules = path.resolve(__dirname, "node_modules");

/** @type {import('jest').Config} */
const config = {
  testMatch: ["<rootDir>/**/__tests__/**/*.[jt]s?(x)"],
  verbose: true,
  transform: {
    "\\.[jt]sx?$": path.resolve(workspaceNodeModules, "babel-jest"),
  },
  moduleDirectories: [
    workspaceNodeModules,
    rootNodeModules,
    "src",
  ],
  collectCoverageFrom: [
    '<rootDir>/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/**/index.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
};

module.exports = config;
