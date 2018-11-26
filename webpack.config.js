const path = require('path');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    },

    mode: 'development',

    devServer: {
        open: true
    }
}