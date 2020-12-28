const { defaultBuildConfig } = require("@component-controls/core");

module.exports = {
  stories: ["./mdx/*.mdx", "./src/**/*.@(mdx|tsx)"],
  siteUrl: `https://omgovich.github.io/react-colorful/`,
  pages: {
    story: {
      tabs: {
        ...defaultBuildConfig.pages.story.tabs,
        test: "@component-controls/pages/TestingPage",
      },
    },
  },
};
