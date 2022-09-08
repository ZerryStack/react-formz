const { defaults } = require('jest-config');
const path = require("path");

/** @type {import('jest').Config} */
const config = {
  verbose: true,
  setupFilesAfterEnv: [path.resolve(__dirname, "configs", "jest", "setup.js")]
};

module.exports = config;