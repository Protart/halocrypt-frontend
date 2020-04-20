const TerserWebpackPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoPrefixPlugin = require("autoprefixer");
const StyleExtHtmlWebpackPlugin = require("style-ext-html-webpack-plugin");
const WebpackModuleNoModulePlugin = require("webpack-module-nomodule-plugin");

// we are inlining css so we don't need this
// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const { basename } = require("path");
const isProd = basename(__filename).includes(".prod");
const mode = isProd ? "production" : "development";
const cfg = require("./.babelrc");
function prodOrDev(a, b) {
  return isProd ? a : b;
}

const jsLoaderOptions = isLegacy => ({
  test: /\.m?js$/,
  exclude: /(node_modules\/(?!@hydrophobefireman))|(injectables)/,
  use: {
    loader: "babel-loader",
    options: cfg.env[isLegacy ? "legacy" : "modern"]
  }
});
const cssLoaderOptions = {
  test: /\.css$/,
  use: [
    { loader: MiniCssExtractPlugin.loader },
    {
      loader: "css-loader"
    },
    {
      loader: "postcss-loader",
      options: { ident: "postcss", plugins: [autoPrefixPlugin()] }
    }
  ]
};
const contentLoaderOptions = {
  test: /\.(png|jpg|gif|ico|svg)$/,
  use: [{ loader: "url-loader", options: { fallback: "file-loader" } }]
};
function getCfg(isLegacy) {
  return {
    devServer: {
      contentBase: `${__dirname}/build`,
      compress: !0,
      port: 4200,
      historyApiFallback: true
    },
    module: {
      rules: [jsLoaderOptions(isLegacy), cssLoaderOptions, contentLoaderOptions]
    },
    entry: `${__dirname}/static/App.js`,
    output: {
      path: `${__dirname}/build`,
      filename: `[name]/${isLegacy ? "legacy" : "es6"}/[contenthash].js`
    },
    mode,
    optimization: {
      minimizer: prodOrDev([new TerserWebpackPlugin({ parallel: !0 })], []),
      splitChunks: {
        chunks: "all"
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: "body",
        template: `${__dirname}/index.html`,
        xhtml: !0,
        favicon: "./favicon.png",
        minify: prodOrDev(
          {
            collapseBooleanAttributes: !0,
            collapseWhitespace: !0,
            html5: !0,
            minifyCSS: !0,
            removeEmptyAttributes: !0,
            removeRedundantAttributes: !0
          },
          !1
        )
      }),
      new WebpackModuleNoModulePlugin(isLegacy ? "legacy" : "modern"),
      new MiniCssExtractPlugin({}),
      new StyleExtHtmlWebpackPlugin({
        minify: prodOrDev(!0, !1)
      })
    ]
  };
}

module.exports = isProd ? [getCfg(false), getCfg(true)] : getCfg(false);
