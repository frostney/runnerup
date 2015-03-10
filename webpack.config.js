module.exports = {
  target: 'web',
  devtool: '#source-map',
  entry: './src/app.js',
  output: {
    filename: 'all.js',
    sourceMapFilename: '[file].map'
  },
  module: {
    loaders: [
      {test: /\.js/, loader: 'babel-loader'}
    ],
    noParse: [/\.min\.js/, /\/node_modules\/react\/dist\/react\.js/]
  },
  resolve: {
    alias: {
      react: 'react/dist/react.js'
    },
    extensions: ['', '.js', '.json', '.jsx'],
    modulesDirectories: ['node_modules']
  }
};