module.exports = {
  entry: './jsonFetcher.class.js',
  devtool: 'source-map',
  output: {
    filename: './index.js',
    library: 'JsonFetcher',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2016']
        }
      }
    ]
  }
};