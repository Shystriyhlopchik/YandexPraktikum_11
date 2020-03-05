const webpack = require('webpack');

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';



module.exports = {
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
        },
    module: {
        rules: [
            { 
            test: /\.js$/, 
            use: { loader: "babel-loader" }, 
            exclude: /node_modules/ 
                },
                {
                    test: /\.(eot|ttf|woff|woff2)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'vendor/[name].[ext]'
                            }
                        }
                    ]
                },
                {
                    test: /\.(png|jpg|gif|ico|svg)$/,
                    use: [
                        'file-loader?name=./images/[name].[ext]',
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                bypassOnDebug: true,
                                disable: true
                            }
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: [(isDev ? 'style-loader' : MiniCssExtractPlugin.loader), 'css-loader', 'postcss-loader']
                }
            ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css',
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                    preset: ['default'],
            },
            canPrint: true
        }),
        new HtmlWebpackPlugin({ // настроили плагин
            inject: false,
            template: './src/index.html',
            filename: 'index.html'
        }),
        new WebpackMd5Hash(),
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
};