const path = require('path');
const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'development';
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname + '/Front_end',
    entry: {
        page: './page.js',
        footer: './footer.js'
    },
    output: {
        path: __dirname + '/public',
        filename: "[name].js",
        // library:  "[name]"
    },
    watch: NODE_ENV == 'development',
    devtool :  NODE_ENV == 'development' ? 'eval' : sourceMap,
    devServer: {
        contentBase: path.resolve(__dirname)
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'My Awesome application',
            myPageHeader: 'Hello World',
            template: '.././Front_end/index.html',
            filename: './index.html',
             //relative to root of the application
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};

if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings:     false,
            drop_console: true
          }
        })
    );
  }