import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin  from "mini-css-extract-plugin";
import type { BuildOptionsTypes } from "./types/build.types";

export function buildWebpackPlugins(options: BuildOptionsTypes): webpack.WebpackPluginInstance[] {
	const {paths} = options;

	return [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: paths.html
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css'
		})
	]
}