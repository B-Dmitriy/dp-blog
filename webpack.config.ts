import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnvVariables, BuildOptionsPaths } from './config/build/types/build.types';

export default (env: BuildEnvVariables): webpack.Configuration => {
    const { port, mode, baseUrl } = env;

    const PORT = port || 3000;
    const MODE = mode || 'development';

    const isDev = MODE === 'development';
    const url = baseUrl || 'http://localhost:8000';

    const paths: BuildOptionsPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        baseUrl: url,
        project: 'frontend',
    });
};
