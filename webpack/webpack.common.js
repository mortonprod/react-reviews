const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
module.exports = {
	 entry: {
		   index: './src/reviews.tsx'
	 },
	 plugins: [
		   new CleanWebpackPlugin(['dist']),
		   new HtmlWebpackPlugin({
			     title: 'Production',
					 template: './index.html'
			 })
	 ],
   extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
   module: {
       loaders: [
           { test: /\.css$/, loader: "style-loader!css-loader" },
           { test: /\.tsx?$/, loader: "ts-loader" },
           {
               test: /\.(png|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
               loader: 'file-loader',
           }
       ]
   },
	 output: {
			 filename: '[name].js',
			 path: path.resolve(__dirname,"..", 'dist'),
		   library: 'reactReviews',
		   libraryTarget: 'umd'

	 }
};
