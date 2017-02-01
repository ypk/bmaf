var webpack = require('webpack');
var path = require('path');

var appPath = path.resolve(__dirname, 'src/app', 'app.js');
var buildPath = path.resolve(__dirname, 'src');

var webpackConfig = {
    devtool: 'inline-source-map',
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
                loader: 'style-loader!css-loader!sass-loader'
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
        path: buildPath,
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: buildPath,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};

module.exports = webpackConfig;
