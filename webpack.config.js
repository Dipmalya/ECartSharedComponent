const miniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
    "devServer": {
        "port": 5000,
        "contentBase": "./dist",
        "hot": true,
        "historyApiFallback": {
            "disableDotRule": true,
        },
    },
    "entry": "./src/index.js",
    "module": {
        "rules": [
            {
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": ["babel-loader"]
            },
            {
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": ["eslint-loader"]
            },
            {
                "test": /\.(scss|css)$/,
                "use": [
                    miniCssExtractPlugin.loader,
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                ]
            }
        ]
    },
    "resolve": {
        "extensions": [
            "*",
            ".js",
            ".jsx"
        ]
    },
    "output": {
        "path": `${__dirname}/dist`,
        "publicPath": "/",
        "filename": "bundle.js"
    },
    "plugins": [
        new miniCssExtractPlugin({
            filename: 'style.css'
        }),
        new webpack.NamedModulesPlugin,
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};