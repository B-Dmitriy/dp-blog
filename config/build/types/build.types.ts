export type BuildModeType = 'production' | 'development';

export interface BuildOptionsPaths {
	entry: string;
	output: string;
	html: string;
	src: string;
}

export interface BuildEnvVariables {
	mode: BuildModeType;
	port: number;
	baseUrl: string;
}

export interface BuildOptionsTypes {
	mode: BuildModeType;
	paths:BuildOptionsPaths
	isDev: boolean;
	port: number;
	baseUrl: string;
}
