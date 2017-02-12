var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var AssetsPlugin = require('assets-webpack-plugin');

module.exports = [
    {
        /* webpack entry 1 - Reactjs */
        entry: {
            example: './App.js'
        },
        output: {
            path: path.join(__dirname, 'bundles'),
            publicPath: "/bundles/",
            filename: '[name].bundle.js'
        },
        devServer: {
            inline: true,
            port: 8080
        },

		devtool: '#inline-source-map',

        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel',
                    query: {
                        presets: ['es2015', 'react'],
                        compact: false
                    }
                },
                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    loader: 'url-loader?limit=20000'
                }
            ]
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        },
        plugins: [
            new AssetsPlugin({
                filename: 'example.bundle.json',
                path: path.join(__dirname, 'bundles/'),
                prettyPrint: true
            }),
            new ExtractTextPlugin("[name].bundle.css"),
        ]
    },
    {
        /* webpack endty 2 - Reactjs */
        entry: {
            toDoApp: './AppToDo.js'
        },
        output: {
            path: path.join(__dirname, 'bundles'),
            publicPath: "/bundles/",
            filename: '[name].bundle.js'
        },
        devServer: {
            inline: true,
            port: 8080
        },

		devtool: '#inline-source-map',

        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel',
                    query: {
                        presets: ['es2015', 'react'],
                        compact: false
                    }
                },
                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    loader: 'url-loader?limit=20000'
                }
            ]
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        },
        plugins: [
            new AssetsPlugin({
                filename: 'toDoApp.bundle.json',
                path: path.join(__dirname, 'bundles/'),
                prettyPrint: true
            }),
            new ExtractTextPlugin("toDoApp.bundle.css"),
        ]
    }
];
