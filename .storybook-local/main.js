const path = require("path");

module.exports = {
  stories: ['../src/**/story.@(ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  webpackFinal: (config) => {
    config.resolve.alias = {
        ["@/utils"]: path.resolve(process.cwd(), "src/packages/utils"),
        ["@/theme"]: path.resolve(process.cwd(), "src/packages/theme"),
        ["@/primatives"]: path.resolve(process.cwd(), "src/packages/primatives")
    }

    return config;
  }
};
