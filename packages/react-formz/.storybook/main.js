const babelPresetReactPath = require.resolve("@babel/preset-react");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  babel: async (options) => {
    const { presets } = options;

    const presetReactIndex = presets.findIndex(([preset]) => {
      return preset === babelPresetReactPath;
    });

    const nextPresetReact = [
      presets[presetReactIndex][0],
      {
        ...presets[presetReactIndex][1],
        development: process.env.NODE_ENV === 'development',
        importSource: '@welldone-software/why-did-you-render',
      },
    ];

    options.presets.splice(presetReactIndex, 1, nextPresetReact);

    const config = {
      ...options,
      presets: [
        ...options.presets,
      ],
    };

    return config;
  },
};
