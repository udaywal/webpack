const path = require('path');

module.exports = {
  mode: 'development', // production
  entry: './src/app.js', // index.js
  output: {
    filename: 'bundle.js', // main.js
    path: path.join(__dirname, 'dist') // dist (if not default provide absolute path)
  },
  devServer: {
    port: 3500,
    static: path.join(__dirname, 'dist'), // public (if not default provide absolute path)
    open: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}