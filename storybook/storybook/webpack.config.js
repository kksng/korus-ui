// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({ config }) => {
  const newConfig = config;
  newConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: 'node_modules/styles-esphere',
        to: 'assets',
      },
      {
        from: 'node_modules/@korus/leda/dist/styles/leda',
        to: 'assets',
      },
    ]),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'storybook.css',
      chunkFilename: 'storybook.css',
    }),
  );
  newConfig.module.rules.push(
    {
      test: /\.js$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react', '@babel/flow', ['@babel/env', { modules: false }]],
            plugins: ['@babel/plugin-syntax-flow', '@babel/plugin-proposal-object-rest-spread', '@babel/plugin-proposal-class-properties'],
            babelrc: false,
          },
        },
      ],
    },
    {
      test: /\.(sa|sc|c)ss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: process.env.NODE_ENV === 'development',
          },
        },
        'css-loader',
        'sass-loader',
      ],
    },
  );

  newConfig.node = {
    fs: 'empty',
  };

  return newConfig;
};
