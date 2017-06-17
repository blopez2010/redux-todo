const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  watch: true,
  devServer: {
    publicPath: "/",
    contentBase: "./public",
    hot: true,
    inline: true,
    port: 8082
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),
    new webpack.DefinePlugin({
      "require.specified": "require.resolve"
    })
  ],
  module: {
    rules: [{
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'bower_components')
      ],
      use: [
        {
          loader: 'babel-loader',
          options: {
            babelrc: true
          }
        }
      ]
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  }
};