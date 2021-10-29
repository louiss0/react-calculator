/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");
const config = require("./webpack.config");
const { default: merge } = require("webpack-merge");
const ForkTsWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = merge(config, {
	devtool: "eval",
	target: "web",
	mode: "development",
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "[name].bundle.js",
		clean: true
	},
	watchOptions: {
		aggregateTimeout: 200,
		poll: 1000,
		ignored: "**/node_modules"
	},
	devServer: {
		headers: {
			"Content-Security-Policy":
				"default-src 'self' data: 'unsafe-inline' script-src 'unsafe-eval' img-src: 'self",
			"Referrer-Policy": "no-referrer",
			"X-Content-Type-Options": "nosniff",
			"X-Frame-Options": "deny",
			"X-Powered-By": "ra2-webpack",
			"X-XSS-Protection": "1; mode=block"
		},
		compress: true,
		static: {
			directory: "./public"
		},
		client: {
			logging: "info",
			overlay: true
		},
		webSocketServer: "ws",
		host: "0.0.0.0",
		port: 3000,
		historyApiFallback: {
			rewrites: [ { from: "/favicon.ico", to: "./src/assets/favicon.ico" } ]
		}
	},
	plugins: [
		new ForkTsWebpackPlugin({
			eslint: {
				files: "./src/**/*.{ts,tsx,js,jsx}",
				options: {
					fix: true
				}
			}
		})
	]
});
