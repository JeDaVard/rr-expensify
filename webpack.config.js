const path = require("path");
const webpack = require("webpack");


module.exports = (env) => {
  const isProduction = env === 'production';
  return {
    entry: "./src/index.js",
    mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
          options: {
            presets: [
                "@babel/env",
                "@babel/preset-react",
            ],
            plugins: [
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-object-rest-spread'
            ]
          }
        },
        {
          test: /\.(css|s?css)$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    },
    resolve: {
      extensions: [
        "*", ".js", ".jsx"
      ],
      alias: {
        'react-dom': '@hot-loader/react-dom',
      }
    },
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, "public/"),
      port: 3000,
      publicPath: "http://localhost:3000/dist/",
      hotOnly: true,
      historyApiFallback: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
  }
};

