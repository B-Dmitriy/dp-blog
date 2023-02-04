import webpack from "webpack";
import type { BuildOptionsTypes } from "./types/build.types";

export function buildWebpackResolves(options: BuildOptionsTypes): webpack.ResolveOptions {
	return {
		extensions: ['.ts', '.tsx', '.js'],
		preferAbsolute: true,
		modules: [options.paths.src, 'node_modules'],
		mainFiles: ['index'],
		alias: {}
	}
}