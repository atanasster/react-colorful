import MiniCssExtractPlugin from "mini-css-extract-plugin";

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    stories: [
        './src/**/*.@(mdx|tsx)',
    ],
    siteUrl: `https://omgovich.github.io/react-colorful/`,
    pages: {
        story: {
            tabs: [{ route: 'page' }, { route: 'test' }],
        },
    },    
};