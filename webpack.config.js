const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: ["@babel/polyfill", "./src/index.js"],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "bundle.js"
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new CopyPlugin([
            {
                from: 'public',
                to: './'
            }]),
    ],
    devtool: process.env.NODE_ENV == 'development' && 'source-map'
};