const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";
let target = "web";

if (process.env.NODE_ENV === "production") {
	mode = "production";
	target = "browserslist";
}
module.exports = {
	mode: mode,
	target: target,
	
	output: {
		assetModuleFilename: "images/[hash][ext][query]"
	},
	
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				type: "asset", // use /inline if dont work
				// parser: {
				// 	dataUrlCondition: {
				// 		maxSize: 30 * 1024,
				// 	},
				// },
			},
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: { publicPath: ""},
					},
					"css-loader",
					"postcss-loader",
					"sass-loader",
				],	
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin()
	],
	
	
	devtool: "source-map",
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		port: 8080,
		hot: true,
	},
};