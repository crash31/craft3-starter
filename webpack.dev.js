// webpack.dev.js - developmental builds

// node modules
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

// webpack plugins
const DashboardPlugin = require('webpack-dashboard/plugin');

// config files
const common = require('./webpack.common.js');
const pkg = require('./package.json');
const settings = require('./webpack.settings.js');

// Configure the webpack-dev-server
const configureDevServer = () => {
    return {
        public: settings.devServerConfig.public(),
        contentBase: path.resolve(__dirname, settings.paths.templates),
        host: settings.devServerConfig.host(),
        port: settings.devServerConfig.port(),
        https: !!parseInt(settings.devServerConfig.https()),
        disableHostCheck: true,
        hot: true,
        overlay: true,
        watchContentBase: true,
        watchOptions: {
            poll: !!parseInt(settings.devServerConfig.poll()),
            ignored: /node_modules/,
        },
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
    };
};

// Configure Image loader
const configureImageLoader = () => {
    return {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]'
                }
            }
        ]
    };
};

// Configure the Postcss loader
const configurePostcssLoader = () => {
    return {
        test: /\.(pcss|css)$/,
        use: [
            {
                loader: 'style-loader',
            },
            {
                loader: 'postcss-loader',
                options: {
                    sourceMap: false,
                    config: {
                        path: path.resolve(__dirname),
                    }
                }
            }
        ]
    };
};

// Development module exports
module.exports = merge(
    common.modernConfig,
    {
        output: {
            filename: path.join('./js', '[name].js'),
            publicPath: settings.devServerConfig.public() + '/',
        },
        mode: 'development',
        devtool: 'eval-cheap-module-source-map',
        devServer: configureDevServer(),
        module: {
            rules: [
                configurePostcssLoader(),
                configureImageLoader(),
            ],
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new DashboardPlugin(),
        ],
    }
);
