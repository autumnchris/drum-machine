const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  module: {
    rules: [
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      },
      {
        test: /\.(mp3|wav)$/,
        use: [
          'url-loader'
        ]
      },
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: [
          'url-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'style.css' })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
