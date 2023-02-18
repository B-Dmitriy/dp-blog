import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { BuildOptionsTypes } from './types/build.types';

export function buildWebpackRules(options: BuildOptionsTypes): webpack.RuleSetRule[] {
    const { isDev } = options;

    // Устанавливаем потому, что Jest не может работать с TS без него,
    // Обязательно должен быть перед ts-loader, иначе сборка упадёт
    // Для запуска тестов с тайпскрипт в Jest @babel/preset-typescript в конфиге babel - достаточно
    // Лоадер в webpack прописывать не обязательно
    const babelLoader = {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
    };

    // !!! ПОРЯДОК лоадеров имеет значение !!!
    // babel-loader не может работать после ts-loader, в таком случае их нужно поменят местами

    // Если не используем тайпскрипт - нужен babel-loader, с пресетами
    // @babel-env, @babel-react, @babel-typescript
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    // Лоадер позволяет обрабатывать svg и собирать их в банл в виде реакт компонент
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    // Есть замена в виде правила: asset/resource: { test: \.png\, type: 'asset/resource' }
    // Webpack 5 и выше, использовать asset/resource
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: ['file-loader'],
    };

    const assetsResource = {
        test: /\.ttf/,
        type: 'asset/resource',
    };

    // Лоадеры из массива выполняются в обратном порядке
    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // "style-loader" - помещает css в JS,
            // MiniCssExtractPlugin - позволяет задать пути и настройки для css файлов
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Позволяет использовать импорты для css, и настроить работу с модулями и css классами
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                },
            },
            // Компилирует sass в css
            'sass-loader',
        ],
    };

    // Тут порядок слева на право
    return [babelLoader, tsLoader, svgLoader, assetsResource, fileLoader, styleLoader];
}
