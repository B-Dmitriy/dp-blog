module.exports = {
    env: {
        browser: true,
        es2021: true,
        // Позволяет видеть типы и переменные jest (describe, test и т д)
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        // 'plugin:i18next/recommended',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'lasted',
        sourceType: 'module',
    },
    plugins: [
        // 'i18next', - eslint-plugin-i18next удалил,
        // так как все атрибуты в игнор писать вручную, того не стоит
        'react',
        '@typescript-eslint',
    ],
    rules: {
        'no-tabs': 'off',
        'no-redeclare': 'off',
        'no-shadow': 'off',
        'no-param-reassign': 'off',
        indent: [2, 4],
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react/function-component-definition': 'off',
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-props-no-spreading': 'warn',
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/mouse-events-have-key-events': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'no-underscore-dangle': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {
            varsIgnorePattern: '^_',
            argsIgnorePattern: '^_',
        }],
        // 'i18next/no-literal-string': ['error', {
        //     markupOnly: true,
        //     //Перечисляем ВСЕ!!! атрибуты которые будем игнорировать
        //     ignoreAttribute: ['type', 'theme', '...'],
        // }],
    },
    // Блок определяющий глобальные переменные
    globals: {
        IS_DEV: true,
        __API__: true,
    },
};
