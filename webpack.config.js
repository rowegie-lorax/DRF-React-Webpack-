var webpack = require("webpack");
var path = require("path");
var BundleTracker = require('webpack-bundle-tracker');


var SRC_DIR = path.resolve(__dirname, "src");
var STATIC_DIR = path.resolve(__dirname, "assets");
console.log(STATIC_DIR);

var config = {
	entry: SRC_DIR + "/app/index.js",
	output:{
		path: path.resolve("./assets/js/"),
		filename: "bundle.js",
		publicPath: "/assets/js/"
	},
	module:{
		loaders: [
			{
				test: /\.js?/,
				include: SRC_DIR,
				loader: "babel-loader",
				query: {
					presets: ["react", "es2015", "stage-2"]
				}

			}
			
		]
	},
	plugins: [
    	new BundleTracker({filename: './webpack-stats.json'})
  	]

};


module.exports = config;