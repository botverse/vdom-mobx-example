var webpack = require('webpack');

module.exports = {
  entry:  [
    './src/app',
  ],
  output: {
    path: 'build/',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.ProvidePlugin({ h: 'virtual-dom/h' }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [/\/src/],
        loader: 'babel',
        query: {
          "presets": ["es2015", "stage-1"],
          "plugins": [
            "transform-h-jsx",
            "transform-decorators-legacy"
          ]
        }
      }
    ]
  }
};

