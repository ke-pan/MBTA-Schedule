var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    app: path.resolve(__dirname, './index.js'),
    sw: path.resolve(__dirname, './sw.js')
  },
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/assets/',
    filename: '[name].js'
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
        include: [
          path.resolve(__dirname, './src'), 
          path.resolve(__dirname),
          path.resolve(__dirname, './node_modules/antd/lib')
        ],
        loader: "style-loader!css-loader"
      }
    ]
  }
}