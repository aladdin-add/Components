const path = require("path");
const AliasPlugin = require("enhanced-resolve/lib/AliasPlugin");

module.exports = {
  "stories": [
    "../packages/**/story.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async config => {
      if (!config.module || !config.resolve) return config;

      config.resolve.plugins = [
          new AliasPlugin(
              "described-resolve",
              [
                  {
                      name: "@/",
                      alias: [
                          path.resolve(__dirname, "..", "packages"),
                          path.resolve(__dirname, "..", "packages", "primatives"),
                          path.resolve(__dirname, "..", "packages", "atoms"),
                          path.resolve(__dirname, "..", "packages", "molecules"),
                          path.resolve(__dirname, "..", "packages", "organisms"),
                          path.resolve(__dirname, "..", "packages", "utils"),
                      ],
                  },
            ],
            "resolve",
        ),
        ];

    return config;
  }
}