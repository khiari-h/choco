const path = require('path');

module.exports = {
  entry: './carousel.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'carousel.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
