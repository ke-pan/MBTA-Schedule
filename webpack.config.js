var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, './index.js'),
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, './node_modules'),
        query: {
          plugins: ['transform-runtime'],
          presets: [
            'react',
            'es2015',
            'stage-0',
            'react-hmre'
          ]
        }
      },
      {
        test: /\.css$/,
        exclude: path.resolve(__dirname, './node_modules'),
        loader: "style-loader!css-loader"
      }
    ]
  }
}