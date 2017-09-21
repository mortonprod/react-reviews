const merge = require('webpack-merge');
var webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  plugins: [
    new UglifyJSPlugin({sourcemap:true}),
		new webpack.DefinePlugin({
			'process.env': {
			  'NODE_ENV': JSON.stringify('production')
		  }
	  })
  ],
  externals: {
   'react': 'commonjs react', 
   'react-dom':'commonjs react-dom'
  }
});
