module.exports = {
  entry: './jsonFetch.js',
  devtool: 'source-map',
  output: {
    filename: './bundle.js'
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