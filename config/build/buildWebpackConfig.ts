import webpack from "webpack";
import {buildWebpackRules} from "./buildWebpackRules";
import {buildWebpackPlugins} from "./buildWebpackPlugins";
import {buildWebpackResolves} from "./buildWebpackResolves";
import {buildWebpackDevServer} from "./buildWebpackDevServer";
import type { BuildOptionsTypes } from "./types/build.types";

export function buildWebpackConfig(options: BuildOptionsTypes): webpack.Configuration {
	const {mode, paths, isDev} = options;

	return {
		mode,
		entry: paths.entry,
		output: {
			filename: '[name][contenthash].js',
			path: paths.output,
			// Очищать папку с билом перед новой сборкой
			clean: true,
		},
		plugins: buildWebpackPlugins(options),
		module: {
			rules: buildWebpackRules(options)
		},
		resolve: buildWebpackResolves(options),
		devServer: isDev ? buildWebpackDevServer(options) : undefined,
		devtool: isDev ? 'inline-source-map' : undefined,
	}
}
