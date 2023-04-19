import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import type { BuildOptionsTypes } from './types/build.types';

export function buildWebpackPlugins(options: BuildOptionsTypes): webpack.WebpackPluginInstance[] {
    const {
        paths, isDev, baseUrl, project,
    } = options;

    const plugins = [
        // Плагин показываюший состояние сборки
        new webpack.ProgressPlugin(),
        // Плагин позволяющий webpack работать с html
        new HtmlWebpackPlugin({
            // Путь к HTML шаблону SPA (index.html)
            template: paths.html,
        }),
        // Плагин позволяющий webpack хранить стили отдельно от JS
        new MiniCssExtractPlugin({
            // Шаблон для имени выходного файла
            filename: 'css/[name].[contenthash:8].css',
            // Шаблон для имени выходных чанков
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        // Плагин позволяющий webpack прокидывать глобальные переменные,
        // к которым можно обращаться из кода, для работы с TS их так же
        // нужно объявить в global.d.ts
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(baseUrl),
            __PROJECT__: JSON.stringify(project),
        }),
    ];

    if (isDev) {
        // Плагин позволяющий "подтягивать" изменения без перезагрузки страницы
        plugins.push(new ReactRefreshWebpackPlugin({
            // Свойство убирает всплывающее на всё окно сообщение об ошибке
            // отловленное ErrorBoundary
            overlay: false,
        }));
        // Плагин позволяющий проанализировать сборку
        // openAnalyzer - true - открывает в новой вкладке при сборке
        // openAnalyzer - false - не открывает но выкидывает ссыклу в консоль
        // plugins.push(new BundleAnalyzerPlugin({
        //     openAnalyzer: false,
        // }));
    }

    return plugins;
}
