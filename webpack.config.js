module.exports = {
  target: 'web',
  devtool: '#source-map',
  entry: {
    app: './src/app'
  },
  output: {
    filename: 'build/debug/all.js',
    sourceMapFilename: '[file].map',
    publicPath: ''
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader'}
    ],
    noParse: [/\.min\.js/]
  },
  resolve: {
    extensions: ['', '.js', '.json'],
    modulesDirectories: ['node_modules']
  }
};