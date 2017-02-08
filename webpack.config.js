var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

var appPath = path.resolve(__dirname, 'src/app', 'app.js');
var buildPath = path.resolve(__dirname, 'src');

var webpackConfig = {
    devtool: '#inline-source-map',
    entry: [
        appPath
    ],
    module: {
        loaders: [{
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0']
                },
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader"
                })
//                loader: 'style-loader!css-loader!sass-loader'
              }, {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.png$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|otf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?|(jpg|gif)$/,
                loader: 'file-loader'
            }
        ]
    },
    output: {
        // path: __dirname + "/src/dist",
        // filename: "[name].bundle.js"
    },
    devServer: {
        contentBase: buildPath,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ngAnnotatePlugin({
            add: true,
            sourcemap: true
        }),
        new ExtractTextPlugin({
      			filename: 'styles.css',
      			disable: false,
      			allChunks: true
    		}),
        new OptimizeCssAssetsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: false, mangle: false, sourcemap: false
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};

module.exports = webpackConfig;
