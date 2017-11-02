const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: __dirname + '/Front_end',
    entry: {
        page: './page.js',
        footer: './footer.js'
    },
    output: {
        path:     __dirname + '/public',
        filename: "[name].js",
        // library:  "[name]"
    },
    devServer: {
        contentBase: path.resolve(__dirname)
    }
};