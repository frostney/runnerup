module.exports = {
  target: 'web',
  devtool: '#source-map',
  output: {
    filename: 'all.js',
    sourceMapFilename: '[file].map'
  },
  module: {
    loaders: [
      {test: /\.js/, loader: 'babel-loader'}
    ],
    noParse: /\.min\.js/
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'],
    modulesDirectories: ['node_modules']
  }
};