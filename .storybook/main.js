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

      // Remove storybook svg loader
        config.module.rules = config.module.rules.map(rule => {
        if (rule.test.toString().includes("svg")) {
            const test = rule.test
            .toString()
            .replace("svg|", "")
            .replace(/\//g, "");
            return { ...rule, test: new RegExp(test) };
        } else {
            return rule;
        }
        });

        config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve("svg-react-loader"),
    });

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