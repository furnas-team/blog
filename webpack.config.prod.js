const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const clientConfig = {
  entry: ["babel-polyfill", "./src/main/client/client.js"],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "blog.client.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }]
        })
      },
      {
        test: /\.(png|jpg|gif|jpeg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.xml$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.ico$/,
        use: 'base64-inline-loader?limit=1000&name=[name].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
};

const serverConfig = {
  entry: ["babel-polyfill", "./src/main/server/server.js"],
  target: 'node',
  output: {
    path: path.resolve(__dirname, "server"),
    filename: "blog.server.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.xml$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.ico$/,
        use: 'base64-inline-loader?limit=1000&name=[name].[ext]'
      }
    ]
  }
};

module.exports = [clientConfig, serverConfig];