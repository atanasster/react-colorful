require("dotenv").config();

module.exports = {
  stories: ["./mdx/*.mdx", "./src/**/*.@(mdx|tsx)"],
  siteUrl: `https://omgovich.github.io/react-colorful/`,
  tokens: {
    githubAccessToken: process.env.GITHUB_AUTH_TOKEN,
  },
  loaders: {
    "css-loader": {
      modules: {
        //prevent encoding of exported names
        localIdentName: "[local]",
      },
    },
  },
};
