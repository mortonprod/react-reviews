const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StyleLintPlugin = require('stylelint-webpack-plugin');
var webpack = require('webpack');

module.exports = {
	entry: {
		   index: './src/reviews.tsx'
	 },
	 plugins: [
		   new StyleLintPlugin(),
		   new CleanWebpackPlugin(['dist']),
		   new HtmlWebpackPlugin({
			     title: 'Production',
					 template: './index.html'
			 }),
			 new ExtractTextPlugin("index.css")			 
	],
	//tslint:config,
   resolve:{
     extensions: ["",".scss", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
   },
   module: {
		preLoaders: [
			{
	   			test: /\.tsx$/,
	   			loader: 'tslint-loader'
	   		}
	   ],
       loaders: [
		   { test: /\.scss$/, loader: ExtractTextPlugin.extract("css-loader!postcss-loader!sass-loader")},
           { test: /\.css$/, loader: ExtractTextPlugin.extract("css-loader!postcss-loader")},		   
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
