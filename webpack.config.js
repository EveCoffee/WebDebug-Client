var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    lib: ["react", "react-dom", "material-ui"],
    app: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/index.tsx'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.optimize.CommonsChunkPlugin("lib", "lib.js")
  ],
  resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      { 
        test: /\.ts|.tsx?$/, 
        loaders: ['react-hot', 'ts'] 
      },
      {
        test: /\.css|scss$/,
        loaders: ["style", "css", "sass"]
      }

    ],

  }
};
