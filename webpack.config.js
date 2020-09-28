const path = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  devtool: 'source-map',
  entry: {
    main: './demo/index.tsx',
  },
  output: {
    path: path.resolve('dist', 'demo'),
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    host: process.platform === 'linux' ? '0.0.0.0' : 'localhost',
    port: process.env.PORT || 9000,
    contentBase: path.resolve('public'),
    overlay: true,
    watchContentBase: true,
  },
  plugins: [
    new CircularDependencyPlugin({
      // exclude detection of files based on a RegExp
      exclude: new RegExp('^' + path.resolve('node_modules')),
      // include specific files based on a RegExp
      include: new RegExp('^' + path.resolve('leda')),
      // add errors to webpack instead of warnings
      failOnError: false,
      // allow import cycles that include an asyncronous import,
      // e.g. via import(/* webpackMode: "weak" */ './file.js')
      allowAsyncCycles: true,
      // set the current working directory for displaying module paths
      cwd: process.cwd(),
    }),
    new HtmlWebpackPlugin({
      title: 'Leda Demo',
      template: 'public/index.html',
      inject: 'head',
      hash: true,
    }),
    new HtmlWebpackTagsPlugin({
      links: [
        {
          path: 'favicon.jpg',
          attributes: {
            rel: 'icon',
          },
        },
      ],
      tags: [
        'assets/css/reset.css',
        'assets/css/helpers.css',
        'assets/css/lists.css',
        'assets/css/demo.css',
        'assets/css/scrollbar.css',
        {
          path: 'assets/css/leda.light.css',
          type: 'css',
          attributes: {
            id: 'leda-css',
          }
        },
      ],
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer',
    }),
  ],
};
