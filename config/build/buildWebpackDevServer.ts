import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type {BuildOptionsTypes} from "./types/build.types";

export function buildWebpackDevServer(options: BuildOptionsTypes): DevServerConfiguration {
	const { port } = options;

	return {
		port,
		open: true,
		historyApiFallback: true,
	}
}