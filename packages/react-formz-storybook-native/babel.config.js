const path = require("path");

const frameworkModules = {
  "@zerry/react-formz": path.resolve(__dirname, "../react-formz/src/index.ts"),
  "@zerry/react-formz-native": path.resolve(__dirname, "../react-formz-native/src/index.ts"),
};

const moduleResolverConfig = {
  root: path.resolve("./"),
  alias: {
    ...frameworkModules,
  },
  "extensions": [".js", ".jsx", ".ts", ".tsx"]
};

const presets = process.env.APP === "web" ? [] : ["babel-preset-expo"];

const plugins =
  process.env.APP === "web"
    ? [
        ["module-resolver", moduleResolverConfig],
        // ["react-native-reanimated/plugin"],
        // ["babel-plugin-styled-components", { "ssr": false }]
      ]
    : [
        ["module-resolver", moduleResolverConfig],
        // ["react-native-reanimated/plugin"],
        // ["babel-plugin-styled-components", { "ssr": false }]
      ];

module.exports = function (api) {
  api.cache(true);
  return {
    presets: presets,
    plugins: plugins,
  };
};