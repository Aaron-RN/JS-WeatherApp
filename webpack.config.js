const path = require('path');
// const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'postcss-loader',
          'postcss-loader',
        ],
      },
    ],
  },
};