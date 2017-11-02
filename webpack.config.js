const path = require('path');
const webpack = require('webpack');

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
    devServer: {
        contentBase: path.resolve(__dirname)
    },
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