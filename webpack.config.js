const path = require('path');
// import css from "styles.css";
const css = require('./client/styles.css');

module.exports = {
  mode: 'development',
  entry: ['./client/src/index.jsx', './client/styles.css'],
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.m?(jsx|css)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: ['babel-loader', 'css-loader'],
          options: {
            presets: ['@babel/preset-env', "@babel/preset-react"]
          }
        }
      }
    ]
  }
}