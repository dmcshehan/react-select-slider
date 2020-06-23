const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === "development";

  const CSSModuleLoader = {
    loader: "css-loader",
    options: {
      modules: true,
      sourceMap: true,
    },
  };

  const CSSLoader = {
    loader: "css-loader",
    options: {
      modules: false,
      sourceMap: true,
    },
  };

  const postCSSLoader = {
    loader: "postcss-loader",
    options: {
      ident: "postcss",
      sourceMap: true,
    },
  };

  return {
    mode: isDevelopment ? "development" : "production",
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            // attach the presets to the loader (most projects use .babelrc file instead)
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },

        {
          test: /\.(sa|sc)ss$/,
          exclude: /\.module\.scss$/,
          use: ["style-loader", CSSLoader, postCSSLoader, "sass-loader"],
        },
        {
          test: /\.module\.scss$/,
          use: ["style-loader", CSSModuleLoader, postCSSLoader, "sass-loader"],
        },

        {
          test: /\.(sa|c)ss$/,
          loader: [
            isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: true,
              },
            },
            "sass-loader",
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
              },
            },
          ],
        },
      ],
    },

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
      new MiniCssExtractPlugin({
        filename: isDevelopment ? "[name].css" : "[name].[hash].css",
        chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css",
      }),
    ],
  };
};
