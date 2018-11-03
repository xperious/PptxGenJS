/*
docs
- https://webpack.js.org/guides/getting-started/
- https://github.com/arcseldon/react-babel-webpack-starter-app/blob/master/webpack.config.js
*/
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const path = require('path');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
	context: __dirname,
	entry: './dist/pptxgen.js',
	/*
	mode: 'development',//'production',
	output: {
		path: path.resolve(__dirname, 'examples'),
		filename: 'my-first-webpack.bundle.js'
	},
	*/
	/*
	plugins: [
		new HtmlWebpackPlugin({ template:'./src/index.html' })
	],
	*/
	resolve: {
		extensions: [".css", ".js"],
		alias: {
			jquery: "jquery/src/jquery"
		}
	}
};
