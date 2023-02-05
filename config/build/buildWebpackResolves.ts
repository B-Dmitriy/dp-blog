import webpack from "webpack";
import type { BuildOptionsTypes } from "./types/build.types";

export function buildWebpackResolves(options: BuildOptionsTypes): webpack.ResolveOptions {
	return {
		// Какие расширения можно не указывать при импорте
		extensions: ['.ts', '.tsx', '.js'],
		// предпочитать абсолютный импорт
		preferAbsolute: true,
		// Из каких папок абсолютный импорт
		modules: [options.paths.src, 'node_modules'],
		// Название главного файла модуля по-умолчанию
		mainFiles: ['index'],
		// Алиасы для путей, например @styles/theme/dark вместо src/assets/styles/theme/dark
		alias: {}
	}
}
