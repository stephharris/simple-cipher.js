const path = require('path');

module.exports = {
  mode: 'production',
  entry: `${path.resolve(__dirname, 'src')}/index.js`,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'Cipher',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};