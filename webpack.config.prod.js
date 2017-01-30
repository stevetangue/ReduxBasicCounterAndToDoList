var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var AssetsPlugin = require('assets-webpack-plugin');

module.exports = [
    {
        /* Reactjs */
        entry: {
            example: './main.js'
        },
        output: {
            path: path.join(__dirname, 'bundles'),
            publicPath: "/bundles/",
            filename: '[name].bundle.[chunckhash].js'
        },
        devServer: {
            inline: true,
            port: 8080
        },
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
//        devtool: '#source-map',
        plugins: [
            new AssetsPlugin({
                filename: 'example.bundle.json',
                path: path.join(__dirname, 'bundles/'),
                prettyPrint: true
            }),
            /* OptimizeCssAssetsPlugin to allow more options for minification for example removing comments and so on 
            new OptimizeCssAssetsPlugin({
                 assetNameRegExp: /\.css$/g,
                 cssProcessor: require('cssnano'),
                 cssProcessorOptions: { 
                     discardComments: {
                         removeAll: true 
                     }, 
                    discardUnused: true,
                    mergeIdents: true,
                    reduceIdents: true,
                    safe: true,
                    sourcemap: false
                 },
                 canPrint: true
            }),*/
            new ExtractTextPlugin("[name].bundle.[chunkhash].css"),
            
            /* PROD only - https://facebook.github.io/react/docs/optimizing-performance.html#use-the-production-build */
            new webpack.DefinePlugin({
              'process.env': {
                NODE_ENV: JSON.stringify('production')
              }
            }),
            
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
                compress: {
                    warnings:false
                }
            })
        ]
    }
];
