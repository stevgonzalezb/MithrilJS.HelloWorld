const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: false
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: './src/index.html'
    //     })
    // ],
    module: {
        rules: []
    }
}