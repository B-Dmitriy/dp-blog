import path from 'path';
import webpack from 'webpack';
import { BuildOptionsPaths } from '../build/types/build.types';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildOptionsPaths = {
        entry: '',
        html: '',
        output: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules.push({
        test: /\.s[ac]ss$/i,
        use: [
            // "style-loader" - помещает css в JS,
            // MiniCssExtractPlugin - позволяет задать пути и настройки для css файлов
            'style-loader',
            // Позволяет использовать импорты для css, и настроить работу с модулями и css классами
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: '[path][name]__[local]--[hash:base64:5]',
                    },
                },
            },
            // Компилирует sass в css
            'sass-loader',
        ],
    });

    return config;
};
