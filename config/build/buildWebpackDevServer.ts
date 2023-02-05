import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type {BuildOptionsTypes} from "./types/build.types";

export function buildWebpackDevServer(options: BuildOptionsTypes): DevServerConfiguration {
	const { port } = options;

	return {
		port,
		open: true,
		// Флаг исправляет ошибку 404 при входе на не корневой путь SPA === "/"
		historyApiFallback: true,
	}
}
