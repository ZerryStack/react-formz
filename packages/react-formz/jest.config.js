const { defaults } = require("jest-config");
const path = require("path");

const workspaceNodeModules = path.resolve(__dirname, "../../", "node_modules");
const rootNodeModules = path.resolve(__dirname, "node_modules");

/** @type {import('jest').Config} */
const config = {
  testMatch: ["<rootDir>/src/**/__tests__/**/*.[jt]s?(x)"],
  verbose: true,
  setupFilesAfterEnv: [path.resolve(__dirname, "configs", "jest", "setup.js")],
  transform: {
    "\\.[jt]sx?$": path.resolve(workspaceNodeModules, "babel-jest"),
  },
  moduleDirectories: [
    workspaceNodeModules,
    rootNodeModules,
    "src",
  ],
  testEnvironment: "jsdom"
};

module.exports = config;
