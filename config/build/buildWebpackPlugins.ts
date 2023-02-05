import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin  from "mini-css-extract-plugin";
import type { BuildOptionsTypes } from "./types/build.types";

export function buildWebpackPlugins(options: BuildOptionsTypes): webpack.WebpackPluginInstance[] {
	const {paths} = options;

	return [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			// Путь к HTML шаблону SPA (index.html)
			template: paths.html
		}),
		new MiniCssExtractPlugin({
			// Шаблон для имени выходного файла
			filename: 'css/[name].[contenthash:8].css',
			// Шаблон для имени выходных чанков
			chunkFilename: 'css/[name].[contenthash:8].css'
		})
	]
}
