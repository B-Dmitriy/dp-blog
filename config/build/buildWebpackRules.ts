import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type {BuildOptionsTypes} from "./types/build.types";

export function buildWebpackRules(options: BuildOptionsTypes): webpack.RuleSetRule[] {
	const {isDev} = options;

	// Если не используем тайпскрипт - нужен babel-loader
	const tsLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	const styleLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			// Creates `style` nodes from JS strings
			// "style-loader",
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			// Translates CSS into CommonJS
			{
				loader: "css-loader",
				options: {
					modules: {
						auto: (resPath: string) => Boolean(resPath.includes('.module.')),
						localIdentName: isDev
							? '[path][name]__[local]--[hash:base64:5]'
							: '[hash:base64:8]'
					},
				}
			},
			// Compiles Sass to CSS
			"sass-loader",
		],
	}

	return [tsLoader, styleLoader];
}