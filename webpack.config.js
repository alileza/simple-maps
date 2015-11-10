module.exports = {
	entry: {
		maps: './index.coffee'
	},
	output: {
		path: 'dist/',
		filename: "[name].js"
	// filename: '../public/resources/app.[hash].min.js'
	},
	module: {
	    loaders: [
	        { test: /\.coffee$/, loader: "coffee-loader" }
	    ]
	}
};
