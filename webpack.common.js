const path = require('path');
const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin({
    filename: 'css/[name].css?[hash]-[chunkhash]-[contenthash]-[name]',
    disable: false,
    allChunks: true
});
const extractSASS = new ExtractTextPlugin({
    filename: 'scss/[name].scss?[hash]-[chunkhash]-[contenthash]-[name]',
    disable: false,
    allChunks: true
});
const CleanWebpackPlugin = require('clean-webpack-plugin');

console.log(NODE_ENV);

module.exports = {
    context: path.resolve(__dirname, "./src"),
    entry: {
        app: './app.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        new CleanWebpackPlugin(['build']),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'My Awesome application',
            template: '.././src/index.html',
            filename: './index.html'
        }),
        extractCSS,
        extractSASS,
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        })
    ],
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "eslint-loader"
            },
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use:
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react', 'stage-2']
                        }
                    }

            },
            {
                test: /\.css$/,
                use: ['css-hot-loader'].concat(extractCSS.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                }))
            },
            {
                test: /\.scss$/,
                use: ['css-hot-loader'].concat(extractCSS.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                }))
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                    'file-loader', {
                        loader: 'image-webpack-loader',
                        options: {
                            gifsicle: {
                                interlaced: false
                            },
                            optipng: {
                                optimizationLevel: 7
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            }
        ]
    }
};