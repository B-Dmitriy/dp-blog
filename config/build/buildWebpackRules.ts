import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type {BuildOptionsTypes} from "./types/build.types";

export function buildWebpackRules(options: BuildOptionsTypes): webpack.RuleSetRule[] {
	const {isDev} = options;

	// Если не используем тайпскрипт - нужен babel-loader, с пресетами
	// @babel-env, @babel-react, @babel-typescript
	const tsLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	};

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: ['file-loader'],
	}

	const styleLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			// "style-loader" - помещает css в JS,
			// MiniCssExtractPlugin - позволяет задать пути и настройки для css файлов
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			// Позволяет использовать импорты для css, и настроить работу с модулями и css классами
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
			// Компилирует sass в css
			"sass-loader",
		],
	}

	return [tsLoader, svgLoader, fileLoader, styleLoader];
}
