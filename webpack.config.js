let webpack = require('webpack');
let path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',

    entry: {
        app: './resources/js/app.js'
    },

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader'
                }
            }
        ]
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                }
            }
        }
    },

    plugins: [
        new VueLoaderPlugin()
    ],

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    }
}
