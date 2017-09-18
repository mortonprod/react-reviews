﻿'use strict';
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
var config = {
    entry: {
        index: ['./src/reviews.tsx'],
        vendor: ['react', 'react-dom']

    },
    plugins: [
        //        new ExtractTextPlugin("site.css"),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
        //        new webpack.ProvidePlugin({
        //            jQuery: 'jquery',
        //            $: 'jquery',
        //            jquery: 'jquery'
        //        })
    ],

    output: {
				path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
        //libraryTarget: 'umd' // Need this for static site generation.
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]

    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            //       {
            //           test: /\.scss$/,
            //           loader: ExtractTextPlugin.extract(
            //               //Need:?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5] to set the right name for each css!
            //               "style",
            //               "css!postcss-loader!sass")
            //       },
            //  { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' },
            { test: /\.tsx?$/, loader: "ts-loader" },
            {
                test: /\.(png|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader',
            }
        ]
    }
};

module.exports = config;
